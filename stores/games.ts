import { ref } from 'vue'
import { defineStore } from 'pinia';

export const useGamesStore = defineStore('games', () => {
    const games = ref(null);

    async function getAllGames(): Promise<void> {
        try {
            const response = await fetch("/api/all-games");
            games.value = await response.json();
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    }

    function search() {
        // todo
    }

    return { games, getAllGames }
})