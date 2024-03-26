<template>
  <div
    class="sm:py-18 container relative mx-auto
  px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20
  pt-8 md:pt-16 overflow-hidden"
  >
    <div class="relative">
      <div
        class="mx-auto max-w-2xl lg:col-span-6 lg:flex
      lg:items-center justify-center text-center"
      >
        <div
          class="relative z-10 lg:h-auto pt-[90px] lg:pt-[20px]
      lg:min-h-[300px] flex flex-col items-center justify-center
      sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8"
        >
          <div class="flex flex-col items-center">
            <h1
              class="font-primary text-foreground text-4xl sm:text-5xl
            sm:leading-none lg:text-7xl"
            >
              <span class="font-primary text-primary-500 dark:text-primary-400">
                {{ $t('pages.index.title') }}
              </span>
              {{ $t('pages.index.appName1') }}
              <span class="font-primary text-primary-500 dark:text-primary-400">
                {{ $t('pages.index.appName2') }}
              </span>
            </h1>
            <h2
              class="text-foreground text-4xl sm:text-5xl
            sm:leading-none lg:text-5xl"
            >
              {{ $t('pages.index.subtitle') }}
            </h2>
            <p
              class="pt-2
              text-foreground my-3 text-sm
            sm:mt-5 lg:mb-0 sm:text-base lg:text-lg"
            >
              {{ $t('pages.index.paragraph1') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('title'),
  description: t('description')
});
</script>
