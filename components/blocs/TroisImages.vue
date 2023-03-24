<template>
  <div class="mt-20 flex flex-col justify-center items-center">
    <div class="flex flex-col lg:flex-row">
      <GenericImageRounded v-for="cont in content" :image="cont.image"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import GenericImageRounded from "~/components/cards/GenericImageRounded.vue";

const props = defineProps<{
  content: []
}>();
</script>
