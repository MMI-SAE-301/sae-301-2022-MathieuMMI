<script setup lang="ts">
</script>


<template>
  <nav>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          <img src="@/assets/TikTak.svg">
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/montre">
          <code class="">Ma montre</code>
        </router-link>
      </li>
      <li>
        A propos
      </li>
      <li>
        <router-link class="text-red-600 underline" to="/compte">
          <img src="@/assets/compteicon.svg">
        </router-link>
      </li>
      <li>
        <img src="@/assets/panier.svg">
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
  </Suspense>
</template>