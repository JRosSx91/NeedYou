<template>
  <UPopover mode="hover">
    <UButton
      color="white"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />

    <template #panel>
      <UCard>
        <Placeholder class="h-16">
          <div class="mb-3">
            <UButton
              class="rounded-full bg-orange-500 dark:bg-orange-400
              hover:bg-orange-600 dark:hover:bg-orange-500 mr-3"
              @click="() => theme.ui.primary = 'orange'"
            />
            <UButton
              class="rounded-full bg-red-500 dark:bg-red-400
              hover:bg-red-600 dark:hover:bg-red-500 mx-3"
              @click="() => theme.ui.primary = 'red'"
            />
            <UButton
              class="rounded-full bg-rose-500 dark:bg-rose-400
              hover:bg-rose-600 dark:hover:bg-rose-500 mx-3"
              @click="() => theme.ui.primary = 'rose'"
            />
            <UButton
              class="rounded-full bg-pink-500 dark:bg-pink-400
              hover:bg-pink-600 dark:hover:bg-pink-500 mx-3"
              @click="() => theme.ui.primary = 'pink'"
            />
            <UButton
              class="rounded-full bg-fuchsia-500 dark:bg-fuchsia-400
              hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 ml-3"
              @click="() => theme.ui.primary = 'fuchsia'"
            />
          </div>
          <div class="mb-3">
            <UButton
              class="rounded-full bg-purple-500 dark:bg-purple-400
              hover:bg-purple-600 dark:hover:bg-purple-500 mr-3"
              @click="() => theme.ui.primary = 'purple'"
            />
            <UButton
              class="rounded-full bg-violet-500 dark:bg-violet-400
              hover:bg-violet-600 dark:hover:bg-violet-500 mx-3"
              @click="() => theme.ui.primary = 'violet'"
            />
            <UButton
              class="rounded-full bg-indigo-500 dark:bg-indigo-400
              hover:bg-indigo-600 dark:hover:bg-indigo-500 mx-3"
              @click="() => theme.ui.primary = 'indigo'"
            />
            <UButton
              class="rounded-full bg-sky-500 dark:bg-sky-400
              hover:bg-sky-600 dark:hover:bg-sky-500 mx-3"
              @click="() => theme.ui.primary = 'sky'"
            />
            <UButton
              class="rounded-full bg-cyan-500 dark:bg-cyan-400
              hover:bg-cyan-600 dark:hover:bg-cyan-500 ml-3"
              @click="() => theme.ui.primary = 'cyan'"
            />
          </div>
          <div>
            <UButton
              class="rounded-full bg-teal-500 dark:bg-teal-400
              hover:bg-teal-600 dark:hover:bg-teal-500 mr-3"
              @click="() => theme.ui.primary = 'teal'"
            />
            <UButton
              class="rounded-full bg-emerald-500 dark:bg-emerald-400
              hover:bg-emerald-600 dark:hover:bg-emerald-500 mx-3"
              @click="() => theme.ui.primary = 'emerald'"
            />
            <UButton
              class="rounded-full bg-green-500 dark:bg-green-400
              hover:bg-green-600 dark:hover:bg-green-500 mx-3"
              @click="() => theme.ui.primary = 'green'"
            />
            <UButton
              class="rounded-full bg-lime-500 dark:bg-lime-400
              hover:bg-lime-600 dark:hover:bg-lime-500 mx-3"
              @click="() => theme.ui.primary = 'lime'"
            />
            <UButton
              class="rounded-full bg-amber-500 dark:bg-amber-400
              hover:bg-amber-600 dark:hover:bg-amber-500 ml-3"
              @click="() => theme.ui.primary = 'amber'"
            />
          </div>
        </Placeholder>
        <template #footer>
          <Placeholder class="h-12">
            <div>
              <UButton
                class="rounded-full bg-stone-500 dark:bg-stone-400
              hover:bg-stone-600 dark:hover:bg-stone-500 mr-3"
                @click="() => theme.ui.gray = 'stone'"
              />
              <UButton
                class="rounded-full bg-neutral-500 dark:bg-neutral-400
              hover:bg-neutral-600 dark:hover:bg-neutral-500 mx-3"
                @click="() => theme.ui.gray = 'neutral'"
              />
              <UButton
                class="rounded-full bg-zinc-500 dark:bg-zinc-400
              hover:bg-zinc-600 dark:hover:bg-zinc-500 mx-3"
                @click="() => theme.ui.gray = 'zinc'"
              />
              <UButton
                class="rounded-full bg-gray-500 dark:bg-gray-400
              hover:bg-gray-600 dark:hover:bg-gray-500 mx-3"
                @click="() => theme.ui.gray = 'cool'"
              />
              <UButton
                class="rounded-full bg-slate-500 dark:bg-slate-400
              hover:bg-slate-600 dark:hover:bg-slate-500 ml-3"
                @click="() => theme.ui.gray = 'slate'"
              />
            </div>
          </Placeholder>
        </template>
      </UCard>
    </template>
  </UPopover>
</template>
<script setup lang="ts">
const theme = useAppConfig();
</script>
