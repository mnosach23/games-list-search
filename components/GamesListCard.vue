<template>
  <li :class="`relative ${breakpointsClasses}`">
    <img
      class="absolute size-full rounded-xl border-[3px] border-[#2D4234]"
      :src="imageLocation"
      alt=""
    >
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  title?: string
  provider?: string
  collections?: object
  real?: string
  demo?: string
}>()

const breakpointsClasses = computed(() => {
  return 'xxs:mr-[8px] xxs:mt-[8px] xxs:size-[144px] ' +
      'xs:mr-[8.03px] xs:mt-[8.36px] xs:size-[175px] ' +
      'sm:mr-[8px] sm:mt-[8px] sm:size-[174px] ' +
      'md:mr-[15.92px] md:mt-[16px] md:h-[272px] md:w-[228px] ' +
      'lg:mr-[8px] lg:mt-[16px] lg:size-[196px] ' +
      'xl:mr-[15.74px] xl:mt-[24px] xl:h-[194px] xl:w-[207px] ' +
      'xxl:mr-[16.25px] xxl:mt-[16px] xxl:size-[286px]'
})
const imageLocation = computed(() => {
  return new URL(`../assets/logos/${props.id.replace('/', ':')}.webp`, import.meta.url).href
})
</script>

<style lang="scss">

</style>
