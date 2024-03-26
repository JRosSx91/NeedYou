<template>
  <div class="grid grid-flow-col auto-cols-[30px] flex-1 -space-x-px">
    <CellComp v-for="cell in 50" :key="cell" />
  </div>
</template>
