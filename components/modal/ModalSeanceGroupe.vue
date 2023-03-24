<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col">
            <div class="flex flex-row p-10 border-gray border-b-2 relative">
              <p class="w-10/12 textePurple font-bold lg:text-2xl lg:w-11/12">Séances de groupe</p>
              <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            </div>
            <div class="text-center">
              <p>
                Je prévois d’organiser <span class="font-bold">des séances de yogathérapie en petit groupe</span> (entre 5 et 10 personnes)<br><br>
                Les séances se dérouleraient en ligne, sur <span class="font-bold">des thématiques spécifiques</span> (par exemple : gestion de l’anxiété, douleur des épaules, douleur pré-menstruel etc...)<br><br>
                Si vous êtes intéressé pour y participer, <span class="font-bold">vous pouvez me contacter</span> via le formulaire « contact », ou par mail ou téléphone. Merci de m’indiquer dans votre message : votre nom, votremail ainsi que la thématique qui vous intéresserais (si vous en avez une en tête) et ceux afin que je puisse vous informer de l’avancé du projet !<br><br>
                Si vous disposez d’un lieu dans le Loiret (45) a louer pour organiser ces séances, vous pouvez également me contacter !
              </p>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 text-center w-4/12 bg-transparent">
              <a href="https://www.celeste-community.com/places/cecile-fabie/" target="_blank"><img src="@/assets/images/boutonRdv.svg"/></a>
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
