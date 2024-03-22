<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex
    items-center justify-between gap-3 h-[4rem]"
  >
    <div class="lg:flex-1 flex items-center gap-1.5">
      <NuxtLink
        href="/"
        class="flex items-end gap-2 font-bold text-xl text-gray-900
        dark:text-white"
        aria-label="Need You"
        previewlistener="true"
      >
        <CommonLogoComp />
      </NuxtLink>
    </div>
    <ul class="items-center gap-x-8 hidden lg:flex font-primary">
      <li>
        Lorem
      </li>
      <li class="text-primary-500 dark:text-primary-400">
        Ipsum
      </li>
      <li>
        Test
      </li>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <CommonColorBtn />
      <div class="relative">
        <div class="inline-flex w-full">
          <UAvatar
            v-if="authStore.user"
            :src="authStore.user.avatarUrl"
            class="mt-2.5"
            size="xs"
            alt="Avatar del usuario"
          />
          <UButton
            v-else
            color="white"
            variant="ghost"
            trailing-icon="i-heroicons-user-solid"
            class="focus:outline-none focus-visible:outline-0
            disabled:cursor-not-allowed disabled:opacity-75
            flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5
            p-1.5 text-gray-700 dark:text-gray-200
            hover:text-gray-900 dark:hover:text-white
            hover:bg-gray-50 dark:hover:bg-gray-800
            focus-visible:ring-inset focus-visible:ring-2
            focus-visible:ring-primary-500
            dark:focus-visible:ring-primary-400 inline-flex items-center"
            @click="isOpen = true"
          />
          <UModal v-model="isOpen" class="z-50">
            <LoginModal />
          </UModal>
        </div>
      </div>
      <div
        class="mt-1 border-l border-slate-200
      dark:border-slate-800 ml-2 pl-3 flex items-center justify-end"
      >
        <CommonDarkLight />
        <NuxtLink to="https://github.com/JRosSx91" class="ml-4 mt-1.5">
          <UTooltip
            text="Support me!"
            class="border-primary-500
          dark:border-primary-400"
          >
            <CommonGithubBtn />
          </UTooltip>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false);
const authStore = useAuthStore();
watch(
  () => authStore.user,
  (newUser) => {
    if (newUser) {
      isOpen.value = false; // Cierra el modal si un usuario está presente
    }
  }
);
</script>
