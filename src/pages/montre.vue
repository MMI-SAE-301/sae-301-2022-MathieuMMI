<script setup lang="ts">
import FormMontre from '@/components/FormMontre.vue'
</script>

<template>
    <section class="bg-yellow-200">
        <h2>Personnalise ta montre</h2>
        <p>Personnalisez votre montre comme bon vous semble. Bracelet, boitier, écran.. c'est à vous de décider de la
            couleur !</p>
        <FormMontre />
    </section>
    <section class="bg-white">
        <h2>Besoin d’inspiration ?</h2>
        <div class="flex gap-10 justify-center mb-10">
            <div class="bg-yellow-400 p-32">
                <p>ICI COMPOSANT EXEMPLE</p>
            </div>
            <div class="bg-yellow-400 p-32">
                <p>ICI COMPOSANT EXEMPLE</p>
            </div>
        </div>
        <div class="flex gap-10 justify-center">
            <div class="bg-yellow-400 p-32">
                <p>ICI COMPOSANT EXEMPLE</p>
            </div>
            <div class="bg-yellow-400 p-32">
                <p>ICI COMPOSANT EXEMPLE</p>
            </div>
        </div>
    </section>

</template>