<template>
  <div class="flex flex-col text-sm text-center items-center lg:w-4/12">
    <a :href="goTo()" class="flex flex-col justify-center items-center border-black border-2 rounded-2xl w-8/12">
      <div >
        <div>
          <img class="items-center justify-center lg:flex-1 rounded-t-2xl" :src="imageToLoad" width="400"/>
        </div>
        <div class="items-center pt-1 text-lg justify-center h-20 font-bold mb-2">
          <div>{{ title }}</div>
          <div v-if="subtitle" class="italic font-light">{{ subtitle }}</div>
        </div>
      </div>
    </a>
    <div class="mb-10 w-3/12" v-if="buttonRdv">
      <a href="https://www.celeste-community.com/places/cecile-fabie/" target="_blank"><img src="@/assets/images/boutonRdv.svg"/></a>
    </div>
    <div class="mb-10" v-else-if="button">
      <button class="bar rounded-3xl p-1.5 mt-10 text-amber-50" @click="openModalWorkbook">Je veux mon worbook offert</button>
      <ModalWorkbook v-if="isOpenWorkbook" @close-modal="closeModalWorkbook"/>
    </div>
    <div class="mb-10" v-else-if="buttonModal">
      <button class="bar rounded-3xl p-1.5 mt-10 text-amber-50" @click="openModalOtherModal">Voir plus !</button>
      <ModalSeanceGroupe v-if="isOpenSG" @close-modal="closeModalOtherModal"/>
      <ModalSeanceIndividuelle v-if="isOpenSI" @close-modal="closeModalOtherModal"/>
      <ModalSeanceStructure v-if="isOpenSS" @close-modal="closeModalOtherModal"/>
      <ModalMassageAbhyanga v-if="isOpenMA" @close-modal="closeModalOtherModal"/>
      <ModalMassageShiroAbhyanga v-if="isOpenMSA" @close-modal="closeModalOtherModal"/>
      <ModalMassageMukabhyanga v-if="isOpenMM" @close-modal="closeModalOtherModal"/>
    </div>
    <div class="mb-10" v-else><br></div>
  </div>
</template>

<script setup lang="ts">

import ModalWorkbook from "~/components/modal/ModalWorkbook.vue";

const props = defineProps<{
  title: string;
  image: string;
  subtitle?: string;
  button?: boolean;
  buttonRdv?: boolean;
  buttonModal?: boolean;
  fromSanity?: boolean;
  goTo?: string;
}>();

const isOpenWorkbook = ref(false);
const isOpenSG = ref(false);
const isOpenSI = ref(false);
const isOpenSS = ref(false);
const isOpenMA = ref(false);
const isOpenMSA = ref(false);
const isOpenMM = ref(false);

const goTo = () => {
  if (props.title === "Yogathérapie") {
   return "/Yogatherapie";
  } else if (props.title === "Boite à outils") {
    return "/BoiteAOutils";
  } else if (props.title === "Massages Ayurvédiques") {
    return "/Massages";
  } else if (props.title === "Videos") {
    return "/Videos";
  } else if (props.title === "Audios") {
    return "/Audios";
  } else if (props.title === "Outils numériques") {
    return "/OutilsNumeriques";
  } else if (props.goTo) {
    return props.goTo;
  }
}
const openModalOtherModal = () => {
  if (props.title === "Séance Individuelle") {
    isOpenSI.value = true;
  } else if (props.title === "Séance de groupe") {
    isOpenSG.value = true;
  } else if (props.title === "Séance en structure de soins") {
    isOpenSS.value = true;
  } else if (props.title === "Abhyanga") {
    isOpenMA.value = true;
  } else if (props.title === "Shiro Abhyanga") {
    isOpenMSA.value = true;
  } else if (props.title === "Mukabhyanga") {
    isOpenMM.value = true;
  }
}

const closeModalOtherModal = () => {
  if (props.title === "Séance Individuelle") {
    isOpenSI.value = false;
  } else if (props.title === "Séance de groupe") {
    isOpenSG.value = false;
  } else if (props.title === "Séance en structure de soins") {
    isOpenSS.value = false;
  } else if (props.title === "Abhyanga") {
    isOpenMA.value = false;
  } else if (props.title === "Shiro Abhyanga") {
    isOpenMSA.value = false;
  } else if (props.title === "Mukabhyanga") {
    isOpenMM.value = false;
  }
}
const openModalWorkbook = () => {
  isOpenWorkbook.value = true;
}

const closeModalWorkbook = () => {
  isOpenWorkbook.value = false;
}
const imageToLoad = computed<string>(() => {
  if (!props.fromSanity) {
    return `/images/${props.image}`;
  }
  return props.image
})
</script>
