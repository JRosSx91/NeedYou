<template>
  <NuxtLayout>
    <!--<ul>
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}
      </li>
    </ul>-->
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@font-face {
  font-family: "Syncopate";
  src: url("~/assets/fonts/Syncopate-Regular.ttf");
}
@font-face {
  font-family: "Syncopate-Bold";
  src: url("~/assets/fonts/Syncopate-Bold.ttf");
}
@font-face {
  font-family: "KoHo-Regular";
  src: url("~/assets/fonts/KoHo-Regular.ttf");
}
.font-primary {
  font-family: "KoHo-Regular", sans-serif;
  font-weight: 600;
}
.font-primary2 {
  font-family: "KoHo-Regular", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
