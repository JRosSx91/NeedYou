<template>
  <UPopover mode="hover">
    <UButton
      color="white"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />

    <template #panel>
      <div class="p-4">
        <Placeholder class="h-20 w-48">
          <UButton
            class="rounded-full bg-[#00C16A] dark:bg-[#00DC82]"
            @click="() => theme.ui.primary = 'green'"
          />
          <UButton
            class="rounded-full bg-[#338dc2] dark:bg-[#59a8d7]"
            @click="() => theme.ui.primary = 'curiousBlue'"
          />
          <UButton
            class="rounded-full bg-[#11c7c1] dark:bg-[#29d8cf]"
            @click="() => theme.ui.primary = 'eggBlue'"
          />
          <UButton
            class="rounded-full bg-[#ffa500] dark:bg-[#ffc71b]"
            @click="() => theme.ui.primary = 'orange'"
          />
        </Placeholder>
      </div>
    </template>
  </UPopover>
</template>
<script setup lang="ts">
const theme = useAppConfig();
</script>
