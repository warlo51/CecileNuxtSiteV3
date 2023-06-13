<template>
  <div class="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-20 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col p-10">
            <div class="flex flex-row p-2 mt-3 border-gray border-b-2 relative">
              <p class="w-10/12 textePurple font-bold lg:text-3xl lg:w-11/12">Séances de groupe</p>
              <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            </div>
            <div class="text-justify p-3">
              <p class="textePurple font-bold lg:text-2xl">Les séances d’initiation :</p>
              <br>
              <p>
                Tout les mois, je propose des séances en ligne d’initiation à la yogathérapie. Ces séances vous permettent de découvrir les outils de la yogathérapie, de poser toutes vos questions et de pratiquer quelques exercices pour comprendre son intérêt.
                Contactez-moi pour connaitre les prochaines dates d’initiation OU rendez vous dans la page actualités.
              </p>

              <p class="textePurple font-bold lg:text-2xl">Les séances à thème :</p>
              <br>
              <p>
                Dès septembre 2023…
                Les séances se dérouleraient en ligne, sur <span class="font-bold">des thématiques spécifiques</span>(par exemple : gestion de l’anxiété, douleur des épaules, douleur pré-menstruel etc…), sous forme de cycle. Un cycle comprendra 4 séances autour d’une même thématique.
              </p>
            </div>
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
</template>

<script setup lang="ts">
const arrow = ref(false);

const showArrow = () => {
  arrow.value = true;
}
const hiddenArrow = () => {
  arrow.value = false;
}
const emits = defineEmits<(e: "closeModal") => void>();

</script>
