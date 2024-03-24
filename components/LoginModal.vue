<template>
  <UCard class="bg-gray-100 dark:bg-gray-900">
    <div class="space-y-4">
      <UFormGroup
        label="Email"
        name="email"
      >
        <UInput
          v-model="email"
          type="email"
        />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="password" type="password" />
      </UFormGroup>

      <p>
        Do you already have an account?
      </p>
      <UButton color="gray" @click="signIn = true">
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" />
        </template>
      </UButton>

      <UButton
        v-if="!signIn"
        label="Sign up"
        color="primary"
        block
        @click="handleSignUp"
      />
      <UButton
        v-else
        label="Sign in"
        color="primary"
        block
        @click="handleLogIn"
      />

      <UDivider label="OR" />
      <CommonGoogleBtn
        @login-success="handleLoginSuccess"
        @login-error="handleLoginError"
      />
    </div>
  </UCard>
</template>
<script setup lang="ts">
import { createClient } from '@supabase/supabase-js';

const router = useRouter();
const email = ref('');
const password = ref('');
const loginMessage = ref('');
const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl,
  config.public.supabaseKey);
const signIn = ref(false);
const emits = defineEmits(['loginSuccess']);

const handleLogIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });
  if (error) {
    loginMessage.value = 'Login error: ' + error.message;
  } else {
    loginMessage.value = 'Successful login';
    router.push('/dashboard');
  }
};

const handleSignUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  });
  if (error) {
    loginMessage.value = 'Error in user registration:' + error.message;
  } else if (data.user && !data.user.email_confirmed_at) {
    loginMessage.value = 'Successful registration. Please, verify your e-mail.';
    emits('loginSuccess');
    router.push('/check-mail');
  }
};

const handleLoginSuccess = () => {
  router.push('/dashboard');
};

const handleLoginError = () => {
  router.push('/');
};
</script>
