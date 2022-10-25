<script setup lang="ts">
//<RouterLink to="/"><img class="mr-[1500px]" src="@/assets/TikTak.svg"></RouterLink>

</script>

<template>
  <header>
    <nav class="relative flex-grow-0 flex-shrink-0 h-32">
      <RouterLink to="/"><img class="ml-10 mt-10" src="@/assets/TikTak.svg"></RouterLink>
      <a class="absolute right-24 top-10 text-xl text-gray-900">A propos</a>
      <RouterLink to="/montre" class="absolute right-48 top-10 text-xl text-gray-900">Ma montre</RouterLink>
      <RouterLink to="/compte" class="absolute right-5 top-10 text-xl text-gray-900"><img src="@/assets/compteicon.svg"
          alt="Logo représentant deux aiguilles avec le mot TikTak, nom de notre société">
      </RouterLink>
      <img class="absolute right-14 top-10 text-xl text-gray-900" src="@/assets/panier.svg">
    </nav>
  </header>
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
  <footer>
    <div class="relative flex-grow-0 flex-shrink-0 bg-black p-10 pb-20">
      <div>
        <div class="flex">
          <div class="flex mb-10 ml-5 gap-6">
            <img class="w-[20%]" src="../public/logo-ig-png-32464 2.png" alt="Logo d'Instagram">
            <img class="w-[20%]" src="../public/image 4.png" alt="Logo de Twitter">
            <img class="w-[20%]" src="../public/image 5.png" alt="Logo de LinkedIn">
          </div>
          <img src="@/assets/TikTak02.svg" class="absolute right-10"
            alt="Logo représentant deux aiguilles avec le mot TikTak, nom de notre société avec une typographie blanche">
        </div>
      </div>
      <div class="text-center text-white mt-14">
        <a class="m-32 text-xl">Mentions légales</a>
        <a class="m-32 text-xl">Conditions générales d’utilisation</a>
        <a class="m-32 text-xl">Conditions générales de ventes</a>
        <a class="m-32 text-xl">Contact</a>
      </div>
    </div>
  </footer>
</template>