<template>
  <div class="mt-20 flex flex-col justify-center items-center relative mt-10">
    <div class="mb-10 lg:text-5xl">
      <h1>L'accompagnement en Yogathérapie</h1>
    </div>
    <Introduction />
    <CommentFonctionneYoga />
    <PourQui />
    <Indications />
    <TypeAccompagnement :content="content" />
    <div class="flex flex-col lg:flex-row lg:space-x-40 text-center p-3">
      <div class="border-black lg:w-6/12 border-2 rounded-2xl mb-5 p-1">
        <p class="font-bold">Mes tarifs :</p>
        <ul>
          <li>Séance individuelle</li>
          <li>Séance de groupe : 20 €/personne (1h)</li>
          <li>Séance en structure : sur devis</li>
        </ul>
      </div>
      <div class="border-black lg:w-6/12 border-2 rounded-2xl p-1">
        <p class="font-bold">Les modes de paiements :</p>
        <ul>
          <li>Espèce</li>
          <li>Chèque</li>
          <li>Carte bleu si réservation en ligne</li>
        </ul>
        <div>
          <a href="https://www.celeste-community.com/places/cecile-fabie/" class="web-right" target="_blank"><img src="@/assets/images/boutonRdv.svg" class="w-4/12"/></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Introduction from "~/components/yogatherapie/Introduction.vue";
import CommentFonctionneYoga from "~/components/yogatherapie/CommentFonctionneYoga.vue";
import PourQui from "~/components/yogatherapie/PourQui.vue";
import Indications from "~/components/yogatherapie/Indications.vue";
import TypeAccompagnement from "~/components/yogatherapie/TypeAccompagnement.vue";

const content = [
  { titre: "Séance Individuelle", image: "seanceIndiv.png", buttonRdv: false, buttonModal:true, fromSanity: false },
  { titre: "Séance de groupe", image: "seanceGroupe.jpg", button: false, buttonModal:true, fromSanity: false},
  { titre: "Séance en structure de soins", image: "seanceStructure.jpg", buttonRdv: false, buttonModal:true, fromSanity: false }
]

</script>
