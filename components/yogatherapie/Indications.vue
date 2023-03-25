<template>
  <div class="mt-20 flex flex-col justify-center items-center lg:p-10 backgroundWhite relative">
    <p class="absolute top-2 lg:top-20 lg:left-40 lg:text-2xl font-bold ">Les indications</p>

    <div class="text-justify text-sm p-4 flex flex-col lg:text-justify xl:text-justify lg:text-lg xl:text-2xl lg:pl-32 lg:pr-32 lg:pt-32 pt-16">
      <p>
        Elles sont nombreuses et variés !<br>
        La yogathérapie s’utilise aussi bien pour <span class="font-bold">prévenir des problèmes de santé</span> que pour <span class="font-bold">accompagner des
        troubles déjà installé.</span><br>
        Voici quelques exemple d’indication : Maladies auto-immune (polyarthrite rhumatoïde, spondylarthrite
        ankylosante...), Maladies respiratoires (asthme...), maladies cardiovasculaire (hypertension), maladies
        neurologiques (migraines, parkinson...) dans le texte enlever le mots « certains » dans la phrase et
        remplacer par « des » -> « pour accompagner certain des troubles…). Puis rajouter à la fin, troubles
        ostéoarticulaire (arthrose, lombalgie, cervicalgie…), dépression, difficulté dans la gestion de ses
        émotions, trouble du sommeil, phobie, syndrome post traumatique…<br><br>
        La yogathérapie peut intervenir sur l’ensemble des système du corps humains. N’hésitez pas à me
        contacter si vous souhaiter savoir si je peux vous accompagné au vue de vos troubles.
      </p>
      <a href="/Contact">
        <button @mouseenter="showArrow" @mouseleave="hiddenArrow" class="bar textWhite text-2xl p-2 mt-10 flex flex-row">
        Contact
          <div v-if="arrow">
            <Icon name="ph:arrow-fat-left-fill" class="mr-1 rotate-180 ml-3 "/>
          </div>

        </button>
      </a>
      <span class="font-bold mt-10">J'interviens en complément de la médecine conventionnelle.......</span>
    </div>
  </div>
</template>
<script setup>

const arrow = ref(false);

const showArrow = () => {
  arrow.value = true;
}
const hiddenArrow = () => {
  arrow.value = false;
}
</script>
