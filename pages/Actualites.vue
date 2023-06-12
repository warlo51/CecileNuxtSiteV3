<template>
  <div class="mt-20 flex flex-col justify-center items-center relative">
    <div class="mb-10 lg:text-5xl">
      <h1>Actualités : articles, évènements...</h1>
    </div>
    <div v-for="(article, index) in articles">
      <ImageGauche v-if="index%2 === 0" :article="article" :index="index"/>
      <ImageDroite v-else :article="article" :index="index"/>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import ImageGauche from "~/components/actualites/ImageGauche.vue";
import ImageDroite from "~/components/actualites/ImageDroite.vue";
import { useArticlesStore } from "~/stores/ArticlesStore";


const articlesStore = useArticlesStore();
const { fetchAllArticles } = articlesStore;
const { articles } = storeToRefs(articlesStore);

fetchAllArticles();
</script>
