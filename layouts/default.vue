<template>
  <header>
    <HeaderBar />
  </header>
  <slot />
  <footer>
    <FooterBar />
  </footer>
</template>
<script setup lang="ts">
import HeaderBar from '~/components/common/HeaderBar.vue';
import FooterBar from '~/components/common/FooterBar.vue';
</script>
