<template>
  <div class="bg-gray-100 dark:bg-gray-900">
    <header
      class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0
  z-50 border-gray-200 dark:border-gray-800"
    >
      <CommonHeaderBar />
    </header>
    <main class="min-h-[calc(100vh-4rem)]">
      <slot />
      <BackgroundComp />
    </main>
    <footer />
  </div>
</template>
