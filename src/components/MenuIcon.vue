<template>
  <button>
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="w-[22px] h-4.5 lg:w-[40px] lg:h-[20px] absolute right-5 top-1 lg:top-3 xl:hidden" preserveAspectRatio="none">
      <line y1="1.5" x2="19" y2="1.5" stroke="#111827" stroke-width="3"></line>
      <line y1="8.5" x2="19" y2="8.5" stroke="#111827" stroke-width="3"></line>
      <line y1="15.5" x2="19" y2="15.5" stroke="#111827" stroke-width="3"></line>
    </svg>
  </button>
  <div id="menu" class="
        fixed
        top-0
        left-0
        z-10
        h-screen
        w-screen
        translate-x-full
        bg-yellow-200
        motion-safe:transition-transform motion-safe:duration-1000" :class="{ 'translate-x-0': menuOuvert }">
    <ul class="mt-36 flex flex-col gap-3 text-center text-3xl">
      <li class="mt-8">
        <router-link to="/montre/montre" @click="menuOuvert = !menuOuvert">Ma montre</router-link>
      </li>
      <li class="mt-8">
        <a @click="menuOuvert = !menuOuvert">A propos</a>
      </li>
      <li class="mt-8">
        <router-link to="/compte" @click="menuOuvert = !menuOuvert">Mon compte</router-link>
      </li>
      <li class="mt-8">
        <a @click="menuOuvert = !menuOuvert">Panier</a>
      </li>
    </ul>
    <div class="relative bottom-96 left-3/4">
      <button>
        <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" @click="menuOuvert = !menuOuvert">
          <line x1="1.37242" y1="0.666376" x2="48.0798" y2="52.8048" stroke="black"></line>
          <line x1="0.642406" y1="50.714" x2="49.5677" y2="0.650907" stroke="black"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuIcon",
  data() {
    return {
      menuOuvert: false,
    };
  },
};
</script>