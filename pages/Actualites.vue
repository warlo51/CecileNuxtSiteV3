<template>
  <div class="mt-20 flex flex-col justify-center items-center relative">
    <div class="mb-10 lg:text-5xl">
      <h1>Actualités : articles, évènements...</h1>
    </div>
    <div v-for="(article, index) in listOfArticles">
      <ImageGauche v-if="index%2 === 0" :article="article" :index="index"/>
      <ImageDroite v-else :article="article" :index="index"/>
    </div>
  </div>
</template>
<script setup>
import ImageGauche from "~/components/actualites/ImageGauche.vue";
import ImageDroite from "~/components/actualites/ImageDroite.vue";
import urlFor from "~/utils/fonctions";

const query = groq`*[_type == "articles"]`;
const { data } = useSanityQuery(query);

const listOfArticles = data.value?.map((article) => {
  return {
    ...article,
    image: urlFor(article.image).url(),
    fromSanity: true
  }
}).sort(function (a, b) {
  return new Date(b._updatedAt) - new Date(a._updatedAt);
});

</script>
