<template>
  <div class="w-full min-w-[150pt] cursor-pointer">
    <div class="relative">
      <SearchSvg />

      <input
        v-model="searchQuery"
        type="text"
        :class="`${inputClasses}`"
        placeholder="Search your game By NAME OR PROVIDER"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGamesStore } from '@/stores/games'
import SearchSvg from '~/components/SearchSvg.vue'

const gamesStore = useGamesStore()
const { searchQuery } = storeToRefs(gamesStore)

const inputClasses = computed(() => {
  return 'ease w-full cursor-pointer rounded-md border border-[#09170E] bg-[#132118] py-2 pl-14 pr-4 '
    + 'text-sm text-white/50 shadow-sm transition duration-300 placeholder:uppercase '
    + 'placeholder:text-white/50 hover:border-slate-400 focus:border-slate-400 focus:shadow '
    + 'focus:outline-none xxs:text-[10px]'
})
</script>
