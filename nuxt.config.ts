// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Must be false to be used served by pocketbase
  srcDir: 'app',
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ['primevue']
  },
  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true
    }
  },
})
