<template>
  <div class="text-center">
    <BoutonRetour />
  </div>
  <div class="mt-20 flex flex-col justify-center items-center relative">
    <div class="mb-10 lg:text-5xl font-bold text-center p-3">
      <h1>{{article?.titre}}</h1>
    </div>
    <div class="w-6/12 lg:w-4/12">
      <img :src="article?.image"/>
    </div>
    <div class="mt-10 p-10 text-justify lg:p40 lg:text-2xl">
      <SanityContent :blocks="article?.texte" />
    </div>
  </div>
</template>
<script setup>

import urlFor from "~/utils/fonctions";
import BoutonRetour from "~/components/menu/BoutonRetour.vue";
const route = useRoute();

const query = groq`*[_type == "articles" && _id == "${route.params.id}"]`;
const { data } = useSanityQuery(query);

const article = computed(() => {
  return data.value?.map((article) => {
    return {
      ...article,
      image: urlFor(article.image).url(),
      fromSanity: true
    }
  })[0]
});

</script>
