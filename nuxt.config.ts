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
      htmlAttrs: {
        dir: 'rtl',
        lang: 'he',
        style: 'scroll-padding-top: 117px; scroll-behavior: smooth;'
      },
    },
  },
  devtools: { enabled: true },
  i18n: {
    legacy: false,
    langDir: 'lang',
    lazy: true,
    defaultLocale: 'he',
    strategy: 'no_prefix',
    locale: 'he',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    },
    locales: [
      {
        code: 'he',
        iso: 'he-IL',
        name: 'עברית',
        file: 'he.js',
        dir: 'rtl'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js',
        dir: 'ltr'
      }
    ],

  },
  modules: ['@nuxt/ui', 'nitro-cloudflare-dev', "@nuxtjs/i18n"]
})