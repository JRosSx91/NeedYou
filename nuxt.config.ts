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
    clientId: process.env.PUBLIC_GOOGLE_ID
  },
  runtimeConfig: {
    supabaseSecretKey: process.env.SUPABASE_SECRET_KEY,
    googleSecretKey: process.env.GOOGLE_SECRET_ID,
    public: {
      supabaseUrl: process.env.PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.PUBLIC_SUPABASE_KEY,
      googleId: process.env.PUBLIC_GOOGLE_ID
    }
  }
});
