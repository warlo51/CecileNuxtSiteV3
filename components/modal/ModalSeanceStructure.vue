<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col p-10">
            <div class="flex flex-row p-2 mt-3 border-gray border-b-2 relative">
              <p class="w-10/12 textePurple font-bold lg:text-3xl lg:w-11/12">Séance en structure de santé</p>
              <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            </div>
            <div class="text-justify p-3">
              <p>
                Je propose des accompagnements en yogathérapie au sein de structure de soins. Le but étant que les personnes qui en ont le plus besoins puissent bénéficier des nombreux bienfaits de la yogathérapie.<br><br>
                La yogathérapie ne se substitut pas à un traitement conventionnel mais elle est complémentaire et elle peux<span class="font-bold">s’intègre au réseau de soin.</span><br><br>
                L’accompagnement peut être fait en individuel en chambre directement au lit du patient, ou en petit groupe autour de thématiques spécifiques (par exemple : gestion de la douleur sciatique, mieux dormir...).<br><br>
                Voici le étapes de déroulement d’une séance type :</p><br>
                <ul style="list-style: inside">
                  <li>Temps d’échange avec recueil de la/des problématiques et détermination d’objectif(s)</li>
                  <li>Explication sur le déroulé de la séance</li>
                  <li>Temps de pratique (au lit, en fauteuil, debout ou sur un tapis), qui se termine par une méditation ou relaxation.</li>
                  <li>Transmission des recommandations jusqu’à la séance suivante avec supports si nécessaire.</li>
                </ul>
                <p>Les tarifs de ces prestations sont réalisés sur <span class="font-bold">devis</span>, sachez toutefois que les institutions peuvent bénéficier de subventions de l’ARS (Agence Régionale de Santé) pour financer ces interventions.<br><br>
                Si vous souhaitez avoir plus de détails sur l’accompagnement en structure, contactez-moi et je serais ravis de vous envoyer ma brochure pour les établissements de santé.
              </p><br>
              <p>
                Les structures qui m’ont fait confiance à ce jour : Fabrik Ta Santé, EHPAD du groupe ORPEA.
              </p>

            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 text-center w-4/12 bg-transparent">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits<(e: "closeModal") => void>();

</script>
