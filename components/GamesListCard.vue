<template>
  <li :class="`relative ${breakpointsClasses}`">
    <img
      class="absolute size-full rounded-xl border-[3px] border-[#2D4234]"
      :src="imageLocation"
      :alt="title"
    >
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
}>()

const breakpointsClasses = computed(() => {
  return 'xxs:mr-[6pt] xxs:mt-[6pt] xxs:size-[108pt] '
    + 'xs:mr-[6.02pt] xs:mt-[6.27pt] xs:size-[131.27pt] '
    + 'sm:mr-[6pt] sm:mt-[6pt] sm:size-[130.5pt] '
    + 'md:mr-[11.95pt] md:mt-[12pt] md:h-[204pt] md:w-[171pt] '
    + 'lg:mr-[6pt] lg:mt-[12pt] lg:size-[147pt] '
    + 'xl:mr-[11.81pt] xl:mt-[18pt] xl:h-[145.5pt] xl:w-[155.25pt] '
    + 'xxl:mr-[12.19pt] xxl:mt-[12pt] xxl:size-[214.5pt]'
})
const imageLocation = computed(() => {
  return new URL(`../assets/logos/${props.id.replace('/', ':')}.webp`, import.meta.url).href
})
</script>
