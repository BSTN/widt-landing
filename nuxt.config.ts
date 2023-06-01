import ViteYaml from '@modyfi/vite-plugin-yaml';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  css: [
    '@/less/elements.less'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/less/ease.less";`
        }
      }
    },
    plugins: [
      ViteYaml(),
    ]
  }
})
