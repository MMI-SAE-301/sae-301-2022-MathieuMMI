<script setup lang="ts">
import ListMontre from '@/components/ListMontre.vue'
</script>
<template>
  <section class="bg-yellow-200">
    <div>
      <h2 class="text-xl font-aubrey text-left lg:ml-96 lg:mb-6 sm:ml-3">Ils ont créé leur propre montre,</h2>
      <figure class="flex gap-10 justify-center">
        <img class="w-80" src="../../public/bruce-mars-8YG31Xn4dSw-unsplash 1.jpg"
          alt="Photographie représentant un cadre d'âge moyen souriant au téléphone">
        <figcaption class="font-belgrano text-lg mt-14 text-center">“Pouvoir personnaliser sa propre montre, <br />
          c’est sympathique.”
        </figcaption>
      </figure>
      <figure class="mt-5 flex gap-10 justify-center relative">
        <figcaption class="font-belgrano text-lg mt-10 text-center">“L’heure est plus agréable à lire quand on <br />
          définit soi-même sa
          montre !”</figcaption>
        <img class="w-80" src="../../public/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash 1.jpg"
          alt="Photographie d'une jeune cadre prenant la pose et souriant">
      </figure>
      <h2 class="text-xl font-aubrey text-right sm:mr-3 lg:mr-96 mt-6 mb-6">à vous de personnaliser la vôtre !</h2>
      <div class="relative text-center">
        <button class="bg-amber-500 rounded-[25px] m-5">
          <RouterLink to="/montre/montre" class="m-1 ml-3 mr-3 text-white text-xl font-aubrey">PERSONNALISER MA MONTRE
          </RouterLink>
        </button>
      </div>
    </div>
  </section>
  <section class="bg-white">
    <h2 class="text-xl font-aubrey sm:ml-20 lg:ml-64 mt-10">Vos créations</h2>
    <div class="gap-20 flex flex-row justify-center">
      <ListMontre class="lg:grid lg:grid-cols-2 lg:gap-36 sm:flex sm:flex-col sm:gap-20" :max="6" />
    </div>
    <h2 class="text-xl font-aubrey sm:ml-20 lg:ml-64 mt-10">TikTak</h2>
    <p class="sm:ml-24 lg:ml-72 font-open-sans text-base">TikTak vous offre la possibilité de confectionner votre propre montre. Personnalisez les couleurs de votre écran,
      de votre bracelet et de votre boitier comme bon vous semble !
    </p>
    <p class="sm:ml-24 lg:ml-72 font-open-sans text-base mb-20">Rendez votre montre unique, parce que vous êtes uniques !</p>
  </section>
</template>