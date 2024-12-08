<template>
  <ul class="my-2 flex flex-wrap">
    <GamesListCard
      v-for="(game, index) in searchedGames"
      :key="`${game?.id}-${index}`"
      v-bind="game"
    />
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useGamesStore } from '@/stores/games'
import { storeToRefs } from 'pinia'

const gamesStore = useGamesStore();
const { searchedGames } = storeToRefs(gamesStore);
const { getAllGames } = gamesStore;

onMounted(async () => {
  await getAllGames()
});
</script>

<style lang="scss">

</style>
