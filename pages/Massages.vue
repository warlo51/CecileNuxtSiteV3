<template>
  <div class="mt-20 flex flex-col justify-center items-center relative">
    <div class="mb-10 lg:text-5xl">
      <h1>Massages Ayurvédiques</h1>
    </div>
    <Introduction />
    <Benefices />
    <TypeAccompagnement :content="content" />
    <Indications />
    <div class="flex flex-col lg:flex-row lg:space-x-40 text-center p-3 mt-10">
      <div class="border-black lg:w-6/12 border-2 rounded-2xl mb-5 p-1">
        <p class="font-bold">Mes tarifs :</p>
        <ul>
          <li>Abhyanga : 70 €</li>
          <li>Shiro Abhyanga : 35 €</li>
          <li>Muka Abhyanga : 35 €</li>
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
import Introduction from "~/components/massages/Introduction.vue";
import Indications from "~/components/massages/Indications.vue";
import TypeAccompagnement from "~/components/massages/TypeAccompagnement.vue";
import Benefices from "~/components/massages/Benefices.vue";

const content = [
  { titre: "Abhyanga", image: "19.png", buttonRdv: false, buttonModal:true, fromSanity: false },
  { titre: "Shiro Abhyanga", image: "21.png", button: false, buttonModal:true, fromSanity: false},
  { titre: "Mukabhyanga", image: "22.png", buttonRdv: false, buttonModal:true, fromSanity: false }
]

</script>
