<template>
  <div class="mt-20 flex flex-col justify-center items-center">
    <div class="mb-10 lg:text-5xl">
      <h1>Mes Prestations</h1>
    </div>
    <div class="flex flex-col lg:flex-row">
        <GenericCard v-for="cont in content" :title="cont.titre" :image="cont.image" :button="cont.button" :buttonRdv="cont.buttonRdv" :from-sanity="cont.fromSanity"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import GenericCard from "~/components/cards/GenericCard.vue";

const props = defineProps<{
  content: []
}>();

</script>
