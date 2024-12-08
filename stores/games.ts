import { ref } from 'vue'
import { defineStore } from 'pinia';

export const useGamesStore = defineStore('games', () => {
    const games = ref([]);
    const searchQuery = ref('');

    const searchedGames = computed(() => {
        if (!searchQuery.value) return games.value;

        return games.value.filter((game) => {
            return (
                game.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                game.provider.toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });
    });

    async function getAllGames(): Promise<void> {
        try {
            const response = await fetch("/api/all-games");
            games.value = await response.json();
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    }

    return { getAllGames, searchQuery, searchedGames }
})