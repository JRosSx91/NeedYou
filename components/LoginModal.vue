<template>
  <UCard class="bg-gray-100 dark:bg-gray-900">
    <div class="space-y-4">
      <UFormGroup
        label="Email"
        name="email"
      >
        <UInput
          type="email"
        />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput type="password" />
      </UFormGroup>

      <UButton label="Log In" color="primary" block />

      <UDivider label="OR" />
      <CommonGoogleBtn
        @login-success="handleLoginSuccess"
        @login-error="handleLoginError"
      />
    </div>
  </UCard>
</template>
<script setup lang="ts">
const router = useRouter();

const handleLoginSuccess = () => {
  router.push('/dashboard');
};

const handleLoginError = () => {
  router.push('/');
};
</script>
