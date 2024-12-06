// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
})
