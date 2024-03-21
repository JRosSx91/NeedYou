<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse
} from 'vue3-google-signin';

const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log('Access Token', credential);
};

const handleLoginError = () => {
  console.error('Login failed');
};
</script>

<template>
  <div class="flex justify-center items-center">
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    />
  </div>
</template>
