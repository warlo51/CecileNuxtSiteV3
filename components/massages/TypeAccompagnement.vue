<template>
  <div class="mt-20 flex flex-col justify-center items-center">
    <div class="mb-10 lg:text-6xl font-bold">
      <h1>Les types de massages</h1>
    </div>
    <div class="flex flex-col lg:flex-row">
      <GenericCard v-for="cont in content" :title="cont.titre" :subtitle="cont.subtitle" :image="cont.image" :buttonModal="cont.buttonModal" :button="cont.button" :buttonRdv="cont.buttonRdv" :from-sanity="cont.fromSanity"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import GenericCard from "~/components/cards/GenericCard.vue";

const props = defineProps<{
  content: []
}>();

</script>
