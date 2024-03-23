<template>
  <div
    class="sm:py-18 container relative mx-auto
    px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20
    pt-8 md:pt-16 overflow-hidden"
  >
    <div class="relative">
      <div
        class="mx-auto max-w-2xl lg:col-span-6 lg:flex
        lg:items-center justify-center text-center"
      >
        <div
          class="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px]
        lg:min-h-[300px] flex flex-col items-center justify-center
        sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8"
        >
          <div class="flex flex-col items-center">
            <h1
              class="text-foreground text-4xl sm:text-5xl
              sm:leading-none lg:text-7xl"
            >
              Please check your email inbox for a link
              <span class=" text-primary-500 dark:text-primary-400">
                to verify your account</span>
              .
            </h1>
            <p
              class="pt-2
                text-foreground my-3 text-sm
              sm:mt-5 lg:mb-0 sm:text-base lg:text-lg"
            >
              If you have not yet received the verification
              email you can resend it from this link.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();
const supabase =
createClient(config.public.supabaseUrl, config.public.supabaseKey);
const router = useRouter();

onMounted(() => {
  const { data: authListener } =
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' &&
    session?.user.email_confirmed_at) {
      // El correo electrónico ha sido confirmado, redirige al dashboard
      router.push('/dashboard');
    }
  });

  // No olvides limpiar el listener cuando el componente se desmonte
  onUnmounted(() => {
    authListener.subscription.unsubscribe();
  });
});
</script>
