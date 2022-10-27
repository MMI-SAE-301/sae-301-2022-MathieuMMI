<script setup lang="ts">
import { supabase } from "@/supabase";
import { useRouter } from "vue-router";
import MontreComp from "./MontreComp.vue";
const router = useRouter();
const props = defineProps<{
    max?: number;
}>();
const { data: montres, error } = await supabase
    .from("montre")
    .select("*")
    .limit(props.max ?? 100);
if (error) {
    console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
    <ul>
        <li v-for="montre in montres" :key="montre.idmontre">
            <router-link :to="{ name: 'montre-edit-id', params: { id: montre.idmontre } }">
                <MontreComp class="w-96 bg-yellow-400 dark:bg-neutral-800 p-10 pl-20 pr-20" v-bind="montre" />
            </router-link>
        </li>
    </ul>
</template>