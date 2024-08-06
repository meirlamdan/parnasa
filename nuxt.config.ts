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
          bindingName: "DB"
        }
      }
    }
  },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nitro-cloudflare-dev']
})