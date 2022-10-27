<script setup lang="ts">
import FormMontre from "@/components/FormMontre.vue"
defineProps<{
  id: string;
}>();
</script>

<template>
  <main class="-mb-20">
    <section class="bg-yellow-200 pt-52 pb-52">
      <FormMontre :id="id" />
    </section>
  </main>
</template>