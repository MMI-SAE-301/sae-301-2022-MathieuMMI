<script setup lang="ts">
import TikTak from '@/components/TikTak.vue'
import MenuIcon from '@/components/MenuIcon.vue'

</script>

<template>
  <header class="bg-white dark:bg-black pb-5">
    <span class="sr-only">En-tête du site</span>
    <nav class="relative">
      <span class="sr-only">Navigation du site</span>
      <RouterLink to="/">
        <span class="sr-only">Notre nom, TikTak, sur une aiguille avec une autre aiguille qui ferme le logo sur la
          gauche</span>
        <TikTak class="dark:hidden ml-8 mt-8" />
        <img class="hidden dark:flex ml-8" src="./assets/TikTak02.svg"
          alt="Logo représentant deux aiguilles avec le mot TikTak, nom de notre société avec une typographie blanche">
      </RouterLink>
      <menu-icon />
      <ul class="hidden w-[803px] xl:flex">
        <li><span class="sr-only">Page à propos</span><a
            class="absolute right-24 top-10 font-aubrey text-xl text-gray-900 dark:text-white">A propos</a></li>
        <li><span class="sr-only">Page de personnalisation de votre montre</span>
          <RouterLink to="/montre/montre"
            class="absolute right-48 font-aubrey top-10 text-xl text-gray-900 dark:text-white">Ma montre
          </RouterLink>
        </li>
        <li><span class="sr-only">Page qui permet d'accéder à votre compte</span>
          <RouterLink to="/compte" class="absolute right-5 top-11">
            <img class="dark:hidden" src="@/assets/compteicon.svg"
              alt="Icône permettant d'accéder aux données du compte">
            <img class="hidden dark:flex" src="@/assets/compteicond.svg"
              alt="Icône permettant d'accéder aux données du compte">
          </RouterLink>
        </li>
        <li><span class="sr-only">Icône permettant d'accéder à votre panier</span>
          <img class="dark:hidden absolute right-14 top-11" src="@/assets/panier.svg"
            alt="Icône permettant d'accéder au panier">
          <img class="hidden dark:flex absolute right-14 top-11" src="@/assets/panierd.svg"
            alt="Icône permettant d'accéder au panier">
        </li>
      </ul>
    </nav>
  </header>
  <main class="dark:bg-gray-300 mb-20">
    <Suspense>
      <router-view />
    </Suspense>
  </main>
  <footer>
    <span class="sr-only">Footer du site</span>
    <div class="relative bg-black p-10 pb-20">
      <div>
        <div class="lg:flex">
          <div class="flex mb-10 mt-3 ml-5 gap-6">
            <img class="w-[15%]" src="../public/insta.png" alt="Logo d'Instagram">
            <img class="w-[15%]" src="../public/twi.png" alt="Logo de Twitter">
            <img class="w-[15%]" src="../public/lin.png" alt="Logo de LinkedIn">
          </div>
          <img src="@/assets/TikTak02.svg" class="lg:absolute lg:right-10"
            alt="Logo représentant deux aiguilles avec le mot TikTak, nom de notre société avec une typographie blanche">
        </div>
      </div>
      <div class="text-center text-white mt-14">
        <a class="lg:m-20 text-xl font-aubrey sm:ga sm:mr-5">Mentions légales<span class="sr-only">Nos mentions
            légales</span></a>
        <a class="lg:m-20 text-xl font-aubrey sm:ga sm:mr-5">Conditions générales d’utilisation<span class="sr-only">Nos
            conditions générales d’utilisation</span></a>
        <a class="lg:m-20 text-xl font-aubrey sm:ga sm:mr-5">Conditions générales de ventes<span class="sr-only">Nos
            conditions générales de ventes</span></a>
        <a class="lg:m-20 font-aubrey text-xl sm:ga sm:mr-5">Contact<span class="sr-only">Notre page de
            contact</span></a>
      </div>
    </div>
  </footer>
</template>