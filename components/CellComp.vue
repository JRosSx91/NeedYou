<template>
  <div
    class="relative border border-primary-200/50
    dark:border-primary-900/25"
  >
    <div
      class="absolute inset-0 bg-primary-500/10
      hover:bg-primary-500/20 dark:bg-primary-400/5
      dark:hover:bg-primary-400/10 opacity-0
      transition-opacity cell"
    />
  </div>
</template>
<style scoped>
.cell {
  animation: opacityChange 3s infinite alternate;
}
@keyframes opacityChange {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
