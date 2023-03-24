<template>
  <div class="mt-20 flex flex-col lg:flex-row justify-center items-center lg:p-10 backgroundWhite">
    <div class="w-10/12 lg:w-1/4">
      <img class="items-center justify-center lg:flex-1" src="../../assets/images/PhotoCecilePresentation.png"/>
    </div>

    <div class="text-center text-sm p-4 lg:flex-1 lg:text-justify xl:text-justify lg:text-lg xl:text-2xl">
      <p>
        Bienvenue à vous !<br><br>
        Je suis Cécile, <span class="font-bold">praticienne en Yogathérapie</span> et <span class="font-bold">Massages Ayurvédiques.</span><br>
        J'accompagne les personnes désireuses d'améliorer leur bien être en leur partageant des outils issu de ces deux médecines
        complémentaires, afin qu'elle soit pleinement acteur de leur santé !
      </p>
      <p class="text-end underline mr-20 cursor-pointer" @click="showMore">{{seeMore}}</p>
    </div>
    <img src="/images/logoAccueilSplit.png" width="150" class="absolute right-0"/>
  </div>
  <div v-if="more" class="lg:p-10 backgroundWhite justify-center items-center p-10 lg:text-2xl">
    <p>Ma première formation est celle d’infirmière. J'ai souhaité me former en médecine complémentaire pour mieux
      accompagner mes patients au quotidien. C'est lors d'un voyage en Inde que j'ai débuté mes formations à la fois
      en médecine ayurvédique et en yogathérapie. De retour en France j’ai poursuivi mes apprentissages en
      Yogathérapie au sein de l'IDYT en France (Institut de Formation De Yogathérapie du Dr COUDRON). À ce jour
      j'accompagne les personnes désireuses d'améliorer leur bien être grâce aux outils de la Yogathérapie en séance
      individuelle et collective et je vous propose des moments de détente grâce aux massages ayurvédiques.</p>
  </div>
</template>
<script setup>

const more = ref(false);
const seeMore = ref("En savoir plus ...");
const showMore = () => {
  if (more.value === false) {
    more.value = true;
    seeMore.value = "En savoir moins ...";
  } else {
    more.value = false;
    seeMore.value = "En savoir plus ...";
  }
}
</script>
