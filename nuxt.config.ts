import ViteYaml from '@modyfi/vite-plugin-yaml';
import svgLoader from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    baseURL: process.env.BASE || '/'
  },

  modules: [
    '@nuxt/content'
  ],

  css: [
    '@/less/elements.less'
  ],
  routeRules: {
    '/scholen': {
      redirect: '/#voor-scholen'
    },
    '/bibliotheken': {
      redirect: '/#voor-bibliotheken'
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/less/ease.less";@import "@/less/animations.less";`
        }
      }
    },
    plugins: [
      ViteYaml(),
      svgLoader()
    ]
  },

  compatibilityDate: '2024-11-11'
})