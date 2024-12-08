// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
})
