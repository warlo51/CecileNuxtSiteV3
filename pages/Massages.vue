<template>
  <div class="mt-20 flex flex-col justify-center items-center relative">
    <div class="lg:text-6xl font-bold">
      <h1>Massages Ayurvédiques</h1>
    </div>
    <Introduction />
    <Benefices />
    <TypeAccompagnement :content="content" />
    <Indications />
    <div class="flex flex-col lg:flex-row lg:space-x-40 text-center p-3 mt-10">
      <div class="border-black lg:w-6/12 border-2 rounded-2xl mb-5 p-1">
        <p class="font-bold text-lg">MES TARIFS</p>
        <br>
        <ul style="text-align: start" class="pl-3">
          <li  style="list-style: inside">Abhyanga : <span class="font-bold">70 €</span></li>
          <br>
          <li  style="list-style: inside">Shiro Abhyanga : <span class="font-bold">35 €</span></li>
          <br>
          <li  style="list-style: inside">Muka Abhyanga : <span class="font-bold">35 €</span></li>
        </ul>
      </div>
      <div class="border-black lg:w-6/12 border-2 rounded-2xl p-1">
        <p class="font-bold text-lg">LES MODES DE PAIEMENTS</p>
        <ul style="text-align: start" class="pl-3"><br>
          <li  style="list-style: inside">Espèce</li><br>
          <li  style="list-style: inside">Chèque</li><br>
          <li  style="list-style: inside">Carte bleu si réservation en ligne</li>
        </ul>
        <div>
          <a href="https://www.celeste-community.com/places/cecile-fabie/" class="web-center" target="_blank"><img src="@/assets/images/boutonRdv.svg" class="w-4/12"/></a>
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
