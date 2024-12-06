<template>
  <ul class="my-2 flex">
    <GamesListCard
      v-for="(games, index) in Array(6)"
      :key="index"
    />
  </ul>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

</style>
