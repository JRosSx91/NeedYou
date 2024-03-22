import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware((nuxtApp: any) => {
  const authStore = useAuthStore();

  if (!authStore.user) {
    return nuxtApp.$router.push('/');
  }
});
