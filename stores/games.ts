import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Game } from '~/@types/game'

export const useGamesStore = defineStore('games', () => {
  const games = ref<Game[]>([])
  const searchQuery = ref('')
  const isLoadingGames = ref(false)

  const searchedGames = computed(() => {
    if (!searchQuery.value) return games.value

    return games.value.filter((game) => {
      return (
        game.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        || game.provider.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })
  })

  async function getAllGames(): Promise<void> {
    try {
      isLoadingGames.value = true
      const response: Response = await fetch('/api/all-games')
      games.value = await response.json()
    }
    catch (error) {
      console.error('Error fetching games:', error)
    }
    finally {
      isLoadingGames.value = false
    }
  }

  return { games, getAllGames, searchQuery, searchedGames, isLoadingGames }
})
