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
        {{ $t('header.nav.navLink1') }}
      </li>
      <li class="text-primary-500 dark:text-primary-400">
        {{ $t('header.nav.navLink2') }}
      </li>
      <li>
        {{ $t('header.nav.navLink3') }}
      </li>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <CommonColorBtn />
      <UDropdown :items="languages" :popper="{ placement: 'bottom-start' }">
        <UButton
          color="white"
          variant="ghost"
          trailing-icon="i-heroicons-language-solid"
          class="focus:outline-none focus-visible:outline-0
      disabled:cursor-not-allowed disabled:opacity-75
      flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5
      p-1.5 text-gray-700 dark:text-gray-200
            hover:text-gray-900 dark:hover:text-white
            hover:bg-gray-300 dark:hover:bg-gray-800
      focus-visible:ring-inset focus-visible:ring-2
      focus-visible:ring-primary-500
      dark:focus-visible:ring-primary-400 inline-flex items-center"
        />
      </UDropdown>
      <div class="relative">
        <div class="inline-flex w-full">
          <div
            v-if="authStore.user"
            class="bg-transparent
              border-none rounded-full h-auto mt-2.5"
          >
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
              <UChip inset>
                <UAvatar
                  :src="authStore.user.avatarUrl"
                  class="border-black border-[0.5px]"
                  size="xs"
                  alt="Avatar del usuario"
                />
              </UChip>
            </UDropdown>
          </div>

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
            hover:bg-gray-300 dark:hover:bg-gray-800
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
import { useLanguages, useMenuItems } from '@/utils/constants';
const isOpen = ref(false);
const authStore = useAuthStore();
const languages = useLanguages();
const items = useMenuItems();

watch(
  () => authStore.user,
  (newUser) => {
    if (newUser) {
      isOpen.value = false;
    }
  }
);
</script>
