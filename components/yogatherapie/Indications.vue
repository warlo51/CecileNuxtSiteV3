<template>
  <div class="mt-20 flex flex-col justify-center items-center lg:p-10 backgroundWhite relative">
    <p class="absolute top-2 lg:top-20 lg:left-40 lg:text-2xl font-bold ">Les indications</p>

    <div class="text-justify text-sm p-4 flex flex-col lg:text-justify xl:text-justify lg:text-lg xl:text-2xl lg:pl-32 lg:pr-32 lg:pt-32 pt-16">
      <p>
        Elles sont nombreuses et variés !<br>
        La yogathérapie s’utilise aussi bien pour <span class="font-bold">prévenir des problèmes de santé</span> que pour <span class="font-bold">accompagner des
        troubles déjà installés.</span><br><br>
        Voici quelques exemples d’indications :
      </p>
      <ul style="list-style: inside">
        <li>Maladies auto-immune (polyarthrite rhumatoïde, spondylarthrite ankylosante…)</li>
        <li>Maladies respiratoires (asthme…)</li>
        <li>Maladies cardiovasculaire (hypertension)</li>
        <li>Maladies neurologiques (migraines, parkinson...)</li>
        <li>Troubles ostéoarticulaire (arthrose, lombalgie, cervicalgie…)</li>
        <li>Dépression</li>
        <li>Difficulté dans la gestion de ses émotions</li>
        <li>Trouble du sommeil</li>
        <li>Phobie</li>
        <li>Syndrome post traumatique…</li>
      </ul>
      <br>
      <p>
        La yogathérapie peut intervenir sur l’ensemble des système du corps humains et sur de nombreuses pathologies chroniques. N’hésitez pas à me contacter si vous souhaitez savoir si je peux vous accompagner !
      </p>
      <span class="font-bold mt-10">Pour rappel, j’interviens en compléments de la médecine conventionnelle. Un accompagnement ne substitut pas à un suivie psychologique ou médicale.</span>
      <a href="/Contact">
        <button @mouseenter="showArrow" @mouseleave="hiddenArrow" class="bar textWhite text-2xl p-2 mt-10 flex flex-row">
          Contact
          <div v-if="arrow">
            <Icon name="ph:arrow-fat-left-fill" class="mr-1 rotate-180 ml-3 "/>
          </div>

        </button>
      </a>
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
