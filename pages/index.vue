<template>
  <CardHomePresentation />
  <Prestations :content="content"/>
  <Actualites :content="articles"/>
  <TroisImages :content="threeimages"/>
</template>
<script setup>

import CardHomePresentation from "~/components/cards/CardHomePresentation.vue";
import Prestations from "~/components/blocs/Prestations.vue";
import Actualites from "~/components/blocs/Actualites.vue";
import TroisImages from "~/components/blocs/TroisImages.vue";
import { useArticlesStore } from "~/stores/ArticlesStore";

const articlesStore = useArticlesStore();
const { fetchThreeLastArticles, fetchAllArticles } = articlesStore;

const content = [
  { titre: "Yogathérapie", image: "Yogatherapie.png", buttonRdv: true, fromSanity: false },
  { titre: "Boite à outils", image: "BoiteAOutils.png", button: true, fromSanity: false},
  { titre: "Massages Ayurvédiques", image: "Massages.png", buttonRdv: true, fromSanity: false }
]

const threeimages = [
  { titre: "", image: "6-min.png", buttonRdv: false, fromSanity: false },
  { titre: "", image: "11.png", button: false, fromSanity: false},
  { titre: "", image: "49.png", buttonRdv: false, fromSanity: false }
]

await fetchAllArticles();
const articles = ref(await fetchThreeLastArticles());
</script>
