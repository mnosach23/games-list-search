<template>
  <li class="relative">
    <img
      class="size-[286px] rounded-xl border-[3px] border-[#2D4234]"
      :src="imageLocation"
      alt=""
    >
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string,
  title?: string,
  provider?: string,
  collections?: object,
  real?: string,
  demo?: string
}>()

const imageLocation = computed(() => {
  return new URL(`../assets/logos/${props.id.replace('/', ':')}.webp`, import.meta.url).href
})
</script>

<style lang="scss">
li {
  margin-top: 16px;
  margin-right: auto;
  width: calc((100% - 81.25px) / 6);

  &:last-child {
    margin-right: unset;
  }
}
</style>
