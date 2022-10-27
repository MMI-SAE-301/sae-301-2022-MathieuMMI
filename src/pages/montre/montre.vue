<script setup lang="ts">
import FormMontre from '@/components/FormMontre.vue'
import ListMontre from '@/components/ListMontre.vue'
</script>

<template>
    <section class="bg-yellow-200 pb-32 dark:bg-slate-700 dark:text-gray-100">
        <span class="sr-only">Personnalisez ici votre future montre</span>
        <h2 class="text-xl font-aubrey sm:ml-20 lg:ml-64">Personnalise ta montre</h2>
        <p class="sm:ml-24 lg:ml-72 font-open-sans text-base mb-20">Personnalisez votre montre comme bon vous semble. Bracelet, boitier, écran.. c'est à vous de décider de la
            couleur !</p>
        <FormMontre />
    </section>
    <section class="mt-20 dark:text-gray-900">
        <span class="sr-only">Retrouvez ici vos anciennes créations</span>
        <h2 class="text-xl font-aubrey sm:ml-20 lg:ml-64 mt-10 mb-10">Besoin d’inspiration ? Revoyez vos créations :</h2>

        <div class="gap-20 flex flex-row justify-center">
            <ListMontre class="lg:grid lg:grid-cols-2 lg:gap-36 sm:flex sm:flex-col sm:gap-20" />
        </div>       
    </section>

</template>