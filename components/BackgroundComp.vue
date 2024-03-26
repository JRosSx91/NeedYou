<template>
  <div
    class="absolute inset-0 grid
  justify-center auto-rows-[30px] -space-y-px mt-[4rem] overflow-hidden"
  >
    <RowComp v-for="row in 30" :key="row" />
  </div>
</template>
