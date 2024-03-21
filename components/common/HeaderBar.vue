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
      <div class="mt-1">
        <CommonDarkLight />
      </div>
      <div class="relative">
        <div class="inline-flex w-full">
          <UButton
            label="Connect"
            variant="ghost"
            color="primary"
            size="2xs"
            class="relative justify-center cursor-pointer inline-flex
            items-center text-center ease-out
            duration-200 rounded-md transition-all
            outline-2 focus-visible:outline-4 focus-visible:outline-offset-1
            border-primary-500 border-[1px] text-foreground hover:bg-primary-500
            shadow-none
            focus-visible:outline-border-strong data-[state=open]:bg-primary-300
            data-[state=open]:outline-border-strong
            text-[10px] px-2.5 h-[23px]"
            @click="isOpen = true"
          />
          <UModal v-model="isOpen" class="z-50">
            <LoginModal />
          </UModal>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false);
</script>
