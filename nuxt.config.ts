// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  imports: {
    dirs: [
      'utils',
      'utils/constants'
    ]
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
  i18n: {
    langDir: 'locales/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.ts' },
      { code: 'es', iso: 'es-ES', file: 'es.ts' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.ts' },
      { code: 'de', iso: 'de-DE', file: 'de.ts' },
      { code: 'it', iso: 'it-IT', file: 'it.ts' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.ts' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.ts' },
      { code: 'ar', iso: 'ar-SA', file: 'ar.ts' }
    ],
    strategy: 'prefix_except_default'
  },
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
