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
        router.push({ name: "montre-edit-id", params: { id: data[0].idmontre } });
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

const { data: listeMateriaux } = await supabase
    .from("materiaux")
    .select("*");

const optionsMateriaux = listeMateriaux?.map((materiaux) => ({
    value: materiaux.idmateriaux,
    label: materiaux.libelle,
}));

const montreObject = ref({});
if (props.id) {
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("idmontre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger les montres :", error);
    else montreObject.value = data[0];
}

async function supprimerMontre() {
    const { data, error } = await supabase
        .from("montre")
        .delete()
        .match({ idmontre: montreObject.value.idmontre });
    if (error) {
        console.error(
            "Erreur à la suppression de ",
            montreObject.value,
            "erreur :",
            error
        );
    } else {
        router.push("/montre/montre");
    }
}
</script>

<template>
    <div class="flex justify-center gap-20">
        <MontreComp class="w-[20%]" v-bind="montre" />
        <FormKit submit-label="Valider" type="form" v-model="montre" @submit="upsertMontre">
            <div class="relative mb-5 mt-32">
                <FormKit label-class="pl-10 absolute inset-0" input-class="sr-only" type="color" value="#b3b3b3"
                    name="ecran" label="Ecran" />
                <div class="w-7 h-7 rounded-full border-2 border-black" :style="{ backgroundColor: montre.ecran }" />
            </div>
            <div class="mb-5">
                <div class="relative">
                    <FormKit label-class="pl-10 absolute inset-0" input-class="sr-only" type="color" value="#FFFFFF"
                        name="bracelet" label="Bracelet" />
                    <div class="w-7 h-7 rounded-full border-2 border-black"
                        :style="{ backgroundColor: montre.bracelet }" />
                </div>
                <FormKit type="select" name="idmateriel_bracelet" label="Type de matériel"
                    :options="optionsMateriaux" />
            </div>

            <div>
                <div class="relative">
                    <FormKit label-class="pl-10 absolute inset-0" input-class="sr-only" type="color" value="#FFFFFF"
                        name="boitier" label="Boitier" />
                    <div class="w-7 h-7 rounded-full border-2 border-black"
                        :style="{ backgroundColor: montre.boitier }" />
                </div>
                <FormKit type="select" name="idmateriel_boitier" label="Type de matériel" :options="optionsMateriaux" />
            </div>
            <button type="button" v-if="montreObject.idmontre" @click="($refs.dialogSupprimer as any).showModal()"
                class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm">
                Supprimer l'offre
            </button>
            <dialog ref="dialogSupprimer" @click="($event.currentTarget as any).close()">
                <button type="button" class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm">
                    Annuler</button><button type="button" @click="supprimerMontre()"
                    class="focus-style rounded-md bg-red-500 p-2 shadow-sm">
                    Confirmer suppression
                </button>
            </dialog>
        </FormKit>
    </div>
</template>

<style>

</style>