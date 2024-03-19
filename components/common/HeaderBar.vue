<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex
    items-center justify-between gap-3 h-[60px]"
  >
    <div class="lg:flex-1 flex items-center gap-1.5">
      <a
        href="/"
        class="flex items-end gap-2 font-bold text-xl text-gray-900
        dark:text-white"
        aria-label="Need U"
        previewlistener="true"
      >
        <LogoComp />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoComp from './LogoComp.vue';
</script>
