// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    experimental: {
      database: true
    },
    prerender: {
      autoSubfolderIndex: false
    }
  },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui"]
})