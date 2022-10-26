<script setup lang="ts">
import type { Montre } from '@/types'
import { ref } from 'vue'
import MontreComp from '@/components/MontreComp.vue'
import { supabase } from '../supabase';
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{
    data?: Montre;
    id?: string;
}>();

const montre = ref<Montre>(props.data ?? {});

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "edit-id", params: { id: data[0].id } });
    }
}

if (props.id) {
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("idmontre", props.id);
    if (error) console.log("n'a pas pu charger la table montre :", error);
    else montre.value = (data as any[])[0];
}

</script>

<template>
    <div class="flex justify-center gap-20">
        <MontreComp class="w-[20%]" v-bind="montre" />
        <FormKit type="form" v-model="montre" @submit="upsertMontre">
            <div class="relative mt-20 mb-5">
                <FormKit label-class="pl-10 absolute inset-0" input-class="sr-only" type="color" value="#FFFFFF"
                    name="bracelet" label="Bracelet" />
                <div class="w-7 h-7 rounded-full border-2 border-black" :style="{ backgroundColor: montre.bracelet }" />
            </div>
            <div class="relative mb-5">
                <FormKit label-class="pl-10 absolute inset-0" input-class="sr-only" type="color" value="#b3b3b3"
                    name="ecran" label="Ecran" />
                <div class="w-7 h-7 rounded-full border-2 border-black" :style="{ backgroundColor: montre.ecran }" />
            </div>
            <div class="relative">
                <FormKit label-class="pl-10 absolute inset-0" input-class="sr-only" type="color" value="#FFFFFF"
                    name="boitier" label="Boitier" />
                <div class="w-7 h-7 rounded-full border-2 border-black" :style="{ backgroundColor: montre.boitier }" />
            </div>
        </FormKit>
    </div>
</template>

<style>

</style>