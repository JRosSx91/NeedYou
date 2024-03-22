<script setup lang="ts">
import { createClient } from '@supabase/supabase-js';

const user = ref<User | null>(null);
const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl,
  config.public.supabaseKey);
const googleId = config.public.googleId;
const emits = defineEmits(['loginSuccess', 'loginError']);

async function handleSignInWithGoogle (response: any) {
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: 'google',
    token: response.credential
  });

  if (error) {
    console.error('Error durante el inicio de sesión:', error.message);
    emits('loginError', error);
  } else {
    console.log('Inicio de sesión exitoso:', data);
    user.value = transformUserDataToUserInterface(data.user);
    const authStore = useAuthStore();
    authStore.setUser(user.value);
    emits('loginSuccess');
  }
}

function transformUserDataToUserInterface (userData: any): User {
  return {
    id: userData.id,
    name: userData.user_metadata?.name || '',
    surname: '',
    completeName: `${userData.user_metadata?.name || ''} 
    ${userData.user_metadata?.surname || ''}`.trim(),
    email: userData.email,
    avatarUrl: userData.user_metadata?.avatar_url
  };
}

const loadGoogleSDK = () => {
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

// Asegura que la función es parte del objeto window antes de cargar el SDK
window.handleSignInWithGoogle = handleSignInWithGoogle;
loadGoogleSDK();

</script>

<template>
  <div class="flex justify-center items-center">
    <div
      id="g_id_onload"
      :data-client_id="googleId"
      data-context="signin"
      data-ux_mode="popup"
      data-callback="handleSignInWithGoogle"
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
