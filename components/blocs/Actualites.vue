<template>
  <div class="mt-20 flex flex-col justify-center items-center backgroundWhite relative">
    <img src="@/assets/images/logoAccueilSplitCorner.png" width="75" class="absolute left-0 top-0"/>
    <div class="mb-10 mt-10 lg:text-6xl font-bold">
      <h1>Les dernières actualités</h1>
    </div>
    <div class="flex flex-col lg:flex-row">
      <GenericCard v-for="(cont, index) in content" :title="cont.titre" :image="cont.image" :button="cont.button" :from-sanity="cont.fromSanity" :goTo="`/articles/${cont._id}`"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import GenericCard from "~/components/cards/GenericCard.vue";
const t = useRouter()
const props = defineProps<{
  content: []
}>();

</script>
