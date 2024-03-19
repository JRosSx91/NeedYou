<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
:root {
    --color-primary-50: 236 253 245;
    --color-primary-100: 209 250 229;
    --color-primary-200: 167 243 208;
    --color-primary-300: 110 231 183;
    --color-primary-400: 52 211 153;
    --color-primary-500: 16 185 129;
    --color-primary-600: 5 150 105;
    --color-primary-700: 4 120 87;
    --color-primary-800: 6 95 70;
    --color-primary-900: 6 78 59;
    --color-primary-950: 2 44 34;
    --color-primary-DEFAULT: var(--color-primary-500);
    --color-gray-50: 248 250 252;
    --color-gray-100: 241 245 249;
    --color-gray-200: 226 232 240;
    --color-gray-300: 203 213 225;
    --color-gray-400: 148 163 184;
    --color-gray-500: 100 116 139;
    --color-gray-600: 71 85 105;
    --color-gray-700: 51 65 85;
    --color-gray-800: 30 41 59;
    --color-gray-900: 15 23 42;
    --color-gray-950: 2 6 23;
}

.text-primary {
  --tw-text-opacity: 1;
  color: rgb(var(--color-primary-DEFAULT)/var(--tw-text-opacity));
}
</style>
