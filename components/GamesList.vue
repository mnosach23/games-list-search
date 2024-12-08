<template>
  <ul class="my-2 flex">
    <GamesListCard
      v-for="(game, index) in games"
      :key="index"
    />
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useGamesStore } from '@/stores/games'
import { storeToRefs } from 'pinia'

const store = useGamesStore();
const { games } = storeToRefs(store)
const { getAllGames } = store

onMounted(async () => {
  await getAllGames()
});
</script>

<style lang="scss">

</style>
