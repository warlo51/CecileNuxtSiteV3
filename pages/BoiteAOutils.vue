<template>
  <div class="mt-20 flex flex-col justify-center items-center relative mt-10">
    <div class="mb-10 lg:text-6xl font-bold">
      <h1>Bienvenue dans la boite à outils !</h1>
    </div>
    <p class="p-10 lg:text-2xl">Ici vous retrouverez différents outils pour vous aider à développer votre bien être en toute autonomie. Retrouvez des outils à télécharger mêlants yogathérapie et des concepts de médecine ayurvédiques pour venir prendre soin de vous.</p>
    <Cards :content="content" />
  </div>
</template>
<script setup lang="ts">

import Cards from "~/components/boiteOutils/Cards.vue";

const content = [
  { titre: "Videos", image: "seanceIndiv.png", buttonRdv: false, buttonModal:false, fromSanity: false },
  { titre: "Outils numériques", image: "BoiteAOutils.png", button: false, buttonModal:false, fromSanity: false},
  { titre: "Audios", image: "ModifContenuSiteWeb.png", buttonRdv: false, buttonModal:false, fromSanity: false }
]

</script>
