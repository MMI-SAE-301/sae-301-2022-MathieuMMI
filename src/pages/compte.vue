<script setup lang="ts">
import { supabase, user } from '../supabase';

</script>
<template>
    <section class="bg-yellow-200 text-center pb-96" >
        <div>
            <button class="bg-amber-500 rounded-[25px] m-5 mt-20" v-if="user" @pointerdown="supabase.auth.signOut()">
                Se déconnecter ({{user.email}})
            </button>
            <button class="bg-amber-500 rounded-[25px] m-5" v-else @pointerdown="supabase.auth.signIn({provider: 'facebook'})">
                Se connecter avec Facebook
            </button>
        </div>
        <div>
            <button class="bg-amber-500 rounded-[25px] m-5" v-if="user" @pointerdown="supabase.auth.signOut()">
                Se déconnecter ({{user.email}})
            </button>
            <button class="bg-amber-500 rounded-[25px] m-5" v-else @pointerdown="supabase.auth.signIn({provider: 'google'})">
                Se connecter avec Google
            </button>
        </div>
    </section>
</template>  