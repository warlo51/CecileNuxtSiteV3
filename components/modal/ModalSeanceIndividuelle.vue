<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col">
            <div class="flex flex-row p-10 border-gray border-b-2 relative">
              <p class="w-10/12 textePurple font-bold lg:text-2xl lg:w-11/12">Déroulement des séances individuelles</p>
              <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            </div>
            <div class="text-center">
              <p class="textePurple font-bold lg:text-2xl">La 1ère seance : Le bilan :</p>
              <p>
                C’est votre première séance, elle dure environ 1h30. Lors de cette séance j’apprends à vous connaitre, je reprends avec vos problème de santé et vos habitudes de vie pour déterminer des objectifs pour votre accompagnement.<br>
                La séance se poursuit par la mise en pratique d’exercices de quelques exercices de bases. Puis nous terminons sur un récapitulalif de ce qui a été travaillé avec des recommandations à suivre jusqu’à la séance suivante, afin que vous puissiez débutés une pratique autonome.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Les séances de suivie :</p>
              <p>
                Nous commençons par prendre un temps pour évaluer vos ressentis et votre pratique depuis notre dernière rencontre puis nous passons par la mise en pratique intégrant de nouveaux exercices. Les séances se terminent toujours par l’explication des recommandations.<br><br>
                Après chaque séance vous aurez accès à une fiche de recommandation de pratique ainsi qu’à des audios pour vous accompagner dans votre pratique quotidienne.<br><br>
                A chaque fin de séance une fiche explicative ainsi que des audios vont sont transmis afin de faciliter votre pratique autonome dans votre quotidien.<br><br>
                Je me déplace à domicile dans un rayon de 15km autour de Donnery (45450). Les séances peuvent également se faire en ligne, il vous suffit de me le notifier lors de votre réservation.
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
