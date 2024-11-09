export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  
  runtimeConfig: {
    public: {
      userId:'',
      projectId: '',
      tokenVimeo: '',
      apiBase: ''
    }
  }
})

