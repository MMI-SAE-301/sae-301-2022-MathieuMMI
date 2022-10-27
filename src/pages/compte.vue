<script setup lang="ts">
import { supabase, user } from '../supabase';

</script>
<template>
    <main class="-mb-20">
        <section class="bg-yellow-200 dark:bg-slate-700 dark:text-gray-100 text-center pb-[50%]">
            <span class="sr-only">Connectez-vous</span>
            <div>
                <button class="text-xl font-aubrey bg-amber-500 dark:bg-gray-900 rounded-[25px] m-5" v-if="user"
                    @pointerdown="supabase.auth.signOut()">
                    Se déconnecter ({{ user.email }})
                </button>
                <button class="text-xl font-aubrey bg-amber-500 dark:bg-gray-900 rounded-[25px] m-5" v-else
                    @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
                    Se connecter avec Facebook
                </button>
            </div>
            <div>
                <button class="text-xl font-aubrey bg-amber-500 dark:bg-gray-900 rounded-[25px] m-5" v-if="user"
                    @pointerdown="supabase.auth.signOut()">
                    Se déconnecter ({{ user.email }})
                </button>
                <button class="text-xl font-aubrey bg-amber-500 dark:bg-gray-900 rounded-[25px] m-5" v-else
                    @pointerdown="supabase.auth.signIn({ provider: 'google' })">
                    Se connecter avec Google
                </button>
            </div>
        </section>
    </main>
</template>  