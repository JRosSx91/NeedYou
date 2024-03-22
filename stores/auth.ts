export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null
  }),
  actions: {
    setUser (userData: User) {
      this.user = userData;
    },
    clearUser () {
      this.user = null;
    }
  }
});
