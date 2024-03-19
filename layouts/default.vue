<template>
  <header
    class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0
  z-50 border-gray-200 dark:border-gray-800"
  >
    <HeaderBar />
  </header>
  <main>
    <slot />
  </main>
  <footer>
  </footer>
</template>
<script setup lang="ts">
import HeaderBar from '~/components/common/HeaderBar.vue';
</script>