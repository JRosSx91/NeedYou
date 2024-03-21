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
            class="rounded-full bg-[#00C16A] dark:bg-[#00C16A]"
            @click="() => theme.ui.primary = 'green'"
          />
        </Placeholder>
      </div>
    </template>
  </UPopover>
</template>
<script setup lang="ts">
const theme = useAppConfig();
</script>
