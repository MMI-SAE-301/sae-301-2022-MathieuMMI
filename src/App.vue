<script setup lang="ts">
//<RouterLink to="/"><img class="mr-[1500px]" src="@/assets/TikTak.svg"></RouterLink>

</script>

<template>
  <header>
    <nav class="relative flex-grow-0 flex-shrink-0 h-32">
      <RouterLink to="/"><img class="ml-10 mt-10" src="@/assets/TikTak.svg"></RouterLink>
      <a class="absolute right-24 top-10 text-xl text-gray-900">A propos</a>
      <RouterLink to="/montre" class="absolute right-48 top-10 text-xl text-gray-900">Ma montre</RouterLink>
      <RouterLink to="/montre" class="absolute right-5 top-10 text-xl text-gray-900"><img src="@/assets/compteicon.svg">
      </RouterLink>
      <RouterLink to="/montre" class="absolute right-14 top-10 text-xl text-gray-900"><img src="@/assets/panier.svg">
      </RouterLink>
    </nav>
  </header>
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
  <footer>
    
  </footer>
</template>