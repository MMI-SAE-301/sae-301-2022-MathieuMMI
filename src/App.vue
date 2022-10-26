<script setup lang="ts">
</script>

<template>
  <header class="bg-white pb-5">
    <nav class="relative">
      <RouterLink to="/"><img class="ml-10 mt-10" src="@/assets/TikTak.svg"></RouterLink>
      <a class="absolute right-24 top-10 font-aubrey text-xl text-gray-900">A propos</a>
      <RouterLink to="/montre/montre" class="absolute right-48 font-aubrey top-10 text-xl text-gray-900">Ma montre
      </RouterLink>
      <RouterLink to="/compte" class="absolute right-5 top-11">
        <img src="@/assets/compteicon.svg"
          alt="Logo représentant deux aiguilles avec le mot TikTak, nom de notre société">
      </RouterLink>
      <img class="absolute right-14 top-11" src="@/assets/panier.svg">
    </nav>
  </header>
  <Suspense>
    <router-view />
  </Suspense>
  <footer>
    <div class="relative bg-black p-10 pb-20">
      <div>
        <div class="lg:flex">
          <div class="flex mb-10 mt-3 ml-5 gap-6">
            <img class="w-[15%]" src="../public/logo-ig-png-32464 2.png" alt="Logo d'Instagram">
            <img class="w-[15%]" src="../public/image 4.png" alt="Logo de Twitter">
            <img class="w-[15%]" src="../public/image 5.png" alt="Logo de LinkedIn">
          </div>
          <img src="@/assets/TikTak02.svg" class="lg:absolute lg:right-10"
            alt="Logo représentant deux aiguilles avec le mot TikTak, nom de notre société avec une typographie blanche">
        </div>
      </div>
      <div class="text-center text-white mt-14">
        <a class="lg:m-20 text-xl font-aubrey sm:ga sm:mr-5">Mentions légales</a>
        <a class="lg:m-20 text-xl font-aubrey sm:ga sm:mr-5">Conditions générales d’utilisation</a>
        <a class="lg:m-20 text-xl font-aubrey sm:ga sm:mr-5">Conditions générales de ventes</a>
        <a class="lg:m-20 font-aubrey text-xl sm:ga sm:mr-5">Contact</a>
      </div>
    </div>
  </footer>
</template>