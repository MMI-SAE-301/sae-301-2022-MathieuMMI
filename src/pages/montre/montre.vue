<script setup lang="ts">
import FormMontre from '@/components/FormMontre.vue'
import ListMontre from '@/components/ListMontre.vue'
</script>

<template>
    <section class="bg-yellow-200">
        <h2 class="text-xl font-aubrey ml-64">Personnalise ta montre</h2>
        <p class="ml-72 font-open-sans text-base mb-20">Personnalisez votre montre comme bon vous semble. Bracelet, boitier, écran.. c'est à vous de décider de la
            couleur !</p>
        <FormMontre />
    </section>
    <section class="bg-white mb-36">
        <h2 class="text-xl font-aubrey ml-64 mt-10">Besoin d’inspiration ? Revoyez vos créations :</h2>

        <div class="gap-20 flex flex-row justify-center">
            <ListMontre class="grid grid-cols-2 gap-36" />
        </div>       
    </section>

</template>