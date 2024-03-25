import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const router = useRouter();

  if (!authStore.user) {
    return router.push('/');
  }
});
