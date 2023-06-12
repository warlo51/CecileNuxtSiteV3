<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col p-10">
            <div class="flex flex-row p-2 mt-3 border-gray border-b-2 relative mt-10">
              <p class="w-10/12 textePurple font-bold lg:text-3xl lg:w-11/12">Politique de Confidentialité</p>
              <Icon style="color: black" @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer "/>
            </div>
            <div class="text-justify p-3">
              <p class="textePurple font-bold lg:text-2xl">Introduction</p>
              <p class="texteBlack">
                Dans le cadre de son activité, l’entreprise EI FABIÉ Cécile, dont le siège social est situé au 13 clos du colombier 45450 à DONNERY, est amenée à collecter et à traiter des informations dont certaines sont qualifiées de « données personnelles ». Cécile FABIÉ attache une grande importance au respect de la vie privée, et n’utilise que des données de manière responsable et confidentielle et dans une finalité précise.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Données personnelles</p>
              <p class="texteBlack">
                Sur le site web yoga-veda-sante, il y a 2 types de données susceptibles d’être recueillies :
                Les données transmises directement
                Ces données sont celles que vous nous transmettez directement, via un formulaire de contact ou bien par contact direct par email. Sont obligatoires dans le formulaire de contact les champs « prénom et « nom » et « email ».
              </p>
              <p class="textePurple font-bold lg:text-2xl">Vos droits concernant les données personnelles</p>
              <p class="texteBlack">
                Vous avez le droit de consultation, demande de modification ou d’effacement sur l’ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.
              </p>
              <p class="textePurple font-bold lg:text-2xl">Contact délégué à la protection des données</p>
              <p class="texteBlack">
                Cécile FABIÉ
                cecile.fabie@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  open: boolean;
  content: any;
}>();

const emits = defineEmits<(e: "closeModal") => void>();

</script>
