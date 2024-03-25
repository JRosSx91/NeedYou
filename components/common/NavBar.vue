<template>
  <ul class="items-center gap-x-8 hidden lg:flex font-primary">
    <li>
      <ULink
        to="/"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400
        hover:text-gray-700 dark:hover:text-gray-200"
      >
        {{ $t('header.nav.navLink1') }}
      </ULink>
    </li>
    <li>
      <ULink
        to="/how-it-works"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400
        hover:text-gray-700 dark:hover:text-gray-200"
      >
        {{ $t('header.nav.navLink2') }}
      </ULink>
    </li>
    <li>
      <ULink
        to="/about"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400
        hover:text-gray-700 dark:hover:text-gray-200"
      >
        {{ $t('header.nav.navLink3') }}
      </ULink>
    </li>
  </ul>
</template>
