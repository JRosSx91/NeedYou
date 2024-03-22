import { createClient } from '@supabase/supabase-js';

export function useSupabase () {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseKey;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const user = ref(null);

  async function signInWithGoogle (response: any) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential
    });

    if (error) {
      console.error('Error durante el inicio de sesión:', error.message);
    } else {
      console.log('Inicio de sesión exitoso:', data);
      user.value = transformUserDataToUserInterface(data.user);
    }

    user.value = data.user;
    return { user: data.user, session: data.session, error };
  }

  return { user, signInWithGoogle };
}
