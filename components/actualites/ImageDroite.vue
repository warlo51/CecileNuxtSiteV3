<template>
  <div class="mt-20 flex flex-col lg:flex-row-reverse justify-center items-center lg:p-10 backgroundWhite">
    <div class="w-8/12 lg:w-1/4">
      <img class="items-center justify-center lg:flex-1" :src="article.image"/>
    </div>

    <div class="text-center text-sm p-10 lg:flex-1 lg:text-justify xl:text-justify lg:text-lg xl:text-2xl">
      <p class="font-bold mb-10">{{article.titre}}</p>
      <p>
        <SanityContent :blocks="article.phrase" />
      </p>
      <a :href="`/articles/${article._id}`"><p class="mt-10 underline">Voir l'article</p></a>
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  article: any;
  index: number;
}>();
</script>
