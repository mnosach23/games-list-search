<template>
  <ul class="my-2 flex flex-wrap justify-center">
    <GamesListCard
      v-for="(game, index) in searchedGames"
      :key="`${game.id}-${index}`"
      v-bind="game"
    />
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGamesStore } from '@/stores/games'

const gamesStore = useGamesStore()
const { searchedGames } = storeToRefs(gamesStore)
const { getAllGames } = gamesStore

onMounted(async () => {
  await getAllGames()
})
</script>

<style lang="scss">

</style>
