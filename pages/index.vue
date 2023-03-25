<template>
  <CardHomePresentation />
  <Prestations :content="content"/>
  <Actualites :content="listOfArticles"/>
  <TroisImages :content="threeimages"/>
</template>
<script setup>

import CardHomePresentation from "~/components/cards/CardHomePresentation.vue";
import Prestations from "~/components/blocs/Prestations.vue";
import Actualites from "~/components/blocs/Actualites.vue";
import TroisImages from "~/components/blocs/TroisImages.vue";
import {groq} from "@nuxtjs/sanity/runtime/groq";
import urlFor from "~/utils/fonctions";

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
}).slice(0,3);

</script>
