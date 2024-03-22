// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt3-leaflet',
    '@nuxt/content',
    'nuxt-vue3-google-signin'
  ],
  googleSignIn: {
    clientId: process.env.GOOGLE_ID
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      googleId: process.env.GOOGLE_ID
    }
  }
});
