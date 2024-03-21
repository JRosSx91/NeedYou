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
      <li class="text-primary-500 dark:text-primary-500">
        Ipsum
      </li>
      <li>
        Test
      </li>
    </ul>
    <div class="flex items-center justify-end lg:flex-1 gap-1.5">
      <div class="relative">
        <div class="inline-flex w-full">
          <UButton
            label="open"
            class="focus:outline-none focus-visible:outline-0
                disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0
                font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700
                dark:text-gray-200 hover:text-gray-900 dark:hover:text-white
                hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset
                focus-visible:ring-2 focus-visible:ring-primary-500
                dark:focus-visible:ring-primary-400 inline-flex items-center"
            @click="isOpen = true"
          />
          <UModal v-model="isOpen" class="z-50">
            <LoginModal />
          </UModal>
        </div>
      </div>
      <div class="relative inline-flex">
        <CommonDarkLight />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false);
</script>
