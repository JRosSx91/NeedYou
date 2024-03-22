<script setup lang="ts">
const config = useRuntimeConfig();
const googleId = config.public.googleId;

if (process.client) {
  window.googleLoginCallback = (...args) => {
    console.log(args);
  };
}
useHead({
  script: [{
    async: true,
    src: 'https://accounts.google.com/gsi/client',
    defer: true
  }]
});
</script>

<template>
  <div class="flex justify-center items-center">
    <div
      id="g_id_onload"
      :data-client_id="googleId"
      data-context="signin"
      data-ux_mode="popup"
      data-callback="googleLoginCallback"
      data-auto_select="true"
      data-auto_prompt="false"
      data-itp_support="true"
    />

    <div
      class="g_id_signin"
      data-type="standard"
      data-theme="outline"
      data-text="continue_with"
      data-shape="square"
      data-size="large"
      data-logo_alignment="left"
    />
  </div>
</template>
