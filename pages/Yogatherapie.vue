<template>
  <div class="mt-20 flex flex-col justify-center items-center relative mt-10">
    <div class="lg:text-6xl font-bold">
      <h1>L'accompagnement en Yogathérapie</h1>
    </div>
    <Introduction />
    <CommentFonctionneYoga />
    <PourQui />
    <Indications />
    <TypeAccompagnement :content="content" />
    <div class="flex flex-col lg:flex-row lg:space-x-40 text-center p-3">
      <div class="border-black lg:w-6/12 border-2 rounded-2xl mb-5 p-1">
        <p class="font-bold text-lg">MES TARIFS</p>
        <br>
        <ul style="text-align: start" class="pl-3">
          <li class="font-bold">Séance individuelle</li>
          <li style="list-style: inside">Bilan : <span class="font-bold">70€</span> (1h30)</li>
          <li style="list-style: inside">Suivie : <span class="font-bold">55€</span> (1h)</li>
        </ul>
        <br>
        <ul style="text-align: start" class="pl-3">
          <li class="font-bold">Séance de groupe </li>
          <li style="list-style: inside">Initiation : <span class="font-bold">15€</span>/personne (1h)</li>
          <li style="list-style: inside">Séance à thème : <span class="font-bold">20€</span>/personne (1h)</li>
          <li style="list-style: inside">Cycle de 4 séances : <span class="font-bold">60€</span></li>
        </ul>
        <br>
        <ul style="text-align: start" class="pl-3">
          <li class="font-bold">Séance en structure : sur devis</li>
        </ul>
        <br>
      </div>
      <div class="border-black lg:w-6/12 border-2 rounded-2xl p-1">
        <p class="font-bold text-lg">LES MODES DE PAIEMENTS</p>
        <br>
        <ul style="text-align: start" class="pl-3">
          <li style="list-style: inside">Espèce</li>
          <br>
          <li style="list-style: inside">Chèque</li>
          <br>
          <li style="list-style: inside">Carte bleu si réservation en ligne</li>
          <br>
          <li style="list-style: inside">Virement (à effectuer avant la séance)</li>
        </ul>
        <div>
          <a href="https://www.celeste-community.com/places/cecile-fabie/" class="web-center" target="_blank"><img src="@/assets/images/boutonRdv.svg" class="w-4/12"/></a>
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
