import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware((nuxtApp) => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    return navigateTo('/');
  }
});
