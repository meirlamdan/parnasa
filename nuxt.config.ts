// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-04',
  nitro: {
    experimental: {
      database: true
    },
    prerender: {
      autoSubfolderIndex: false
    },
    database: {
      default: {
        connector: 'cloudflare-d1',
        options: {
          bindingName: process.env.DB || "DB",
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'he', style: 'scroll-padding-top: 117px; scroll-behavior: smooth;' },
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nitro-cloudflare-dev']
})