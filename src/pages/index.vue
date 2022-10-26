<script setup lang="ts">
import Montreconnectee_illustration from '@/components/MontreComp.vue'
</script>
<template>
  <section class="bg-yellow-200">
    <div>
      <h2>Ils ont créé leur propre montre,</h2>
      <img src="../../public/bruce-mars-8YG31Xn4dSw-unsplash 1.jpg"
        alt="Photographie représentant un cadre d'âge moyen souriant au téléphone">
      <h3>“Pouvoir personnaliser sa propre montre, c’est sympathique.”</h3>
      <img src="../../public/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash 1.jpg"
        alt="Photographie d'une jeune cadre prenant la pose et souriant">
      <h3>“L’heure est plus agréable à lire quand on définit soi-même sa montre !”</h3>
      <h2>à vous de personnaliser la vôtre !</h2>
      <div class="relative text-center">
        <button class="bg-amber-500 rounded-[25px] m-5">
          <RouterLink to="./montre" class="m-1 ml-3 mr-3">PERSONNALISER</RouterLink>
        </button>
      </div>
    </div>
  </section>
  <section class="bg-white">
    <h2>Vos créations</h2>

    <div class="flex justify-center">
      <div class="flex gap-36 w-[50%]">
        <Montreconnectee_illustration class="bg-yellow-400 p-32 pt-5 pb-5" />
        <Montreconnectee_illustration class="bg-yellow-400 p-32 pt-5 pb-5" />
      </div>
    </div>
    <h2>TikTak</h2>
    <p>TikTak vous offre la possibilité de confectionner votre propre montre. Personnalisez les couleurs de votre écran,
      de votre bracelet et de votre boitier comme bon vous semble !
    </p>
    <p>Rendez votre montre unique, parce que vous êtes uniques !</p>
  </section>
</template>