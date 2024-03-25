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
    <CommonNavBar />
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <CommonColorBtn />
      <UDropdown :items="languages" :popper="{ placement: 'bottom-start' }">
        <CommonLanguageBtn />
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

          <CommonUserBtn v-else @click="isOpen = true" />
          <UModal v-model="isOpen" class="z-50">
            <LoginModal />
          </UModal>
        </div>
      </div>
      <div
        class="border-l border-slate-200
      dark:border-slate-800 ml-2 pl-3 flex items-center justify-end"
      >
        <CommonDarkLight />
        <NuxtLink to="https://github.com/JRosSx91" class="ml-4 mt-1.5">
          <UTooltip
            text="Support me!"
            :popper="{ arrow: true }"
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
