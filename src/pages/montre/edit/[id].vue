<script setup lang="ts">
import FormMontre from "@/components/FormMontre.vue"
defineProps<{
  id: string;
}>();
</script>
<template>
  <section class="bg-yellow-200 pt-52 pb-52">
  <FormMontre :id="id" />
  </section>
</template>