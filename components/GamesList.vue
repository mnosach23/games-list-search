<template>
  <ul
    v-if="searchedGames.length"
    class="my-2 flex flex-wrap justify-center"
  >
    <GamesListCard
      v-for="(game, index) in searchedGames"
      :key="`${game.id}-${index}`"
      v-bind="game"
    />
  </ul>
  <div
    v-if="!games.length || isLoadingGames"
    class="my-2 flex justify-center"
  >
    <GamesListLoader />
  </div>
  <div
    v-if="games.length > 0 && searchedGames.length === 0"
    class="my-2 flex justify-center text-xl"
  >
    No data found
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGamesStore } from '@/stores/games'

const gamesStore = useGamesStore()
const { games, searchedGames, isLoadingGames } = storeToRefs(gamesStore)
const { getAllGames } = gamesStore

onMounted(async () => {
  await getAllGames()
})
</script>
