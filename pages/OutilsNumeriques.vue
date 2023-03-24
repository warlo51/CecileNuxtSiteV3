<template>
  <div class="text-center">
    <BoutonRetour />
  </div>
  <div class="backgroundBeige">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Liste des outils numériques :</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="outil in outils" :key="outil._id" class="group relative cursor-pointer" @click="openModal(outil._id)">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="outil?.image" :alt="outil?.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a>
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ outil.titre }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ outil.gratuit ? "Gratuit" : "Payant" }}</p>
            </div>
            <p v-if="outil?.prix" class="text-sm font-medium text-gray-900">{{ outil?.prix }} €</p>
          </div>
        </div>
      </div>
    </div>
    <ModalBoiteAOutils v-if="showModal" :content="outilsSelected" @close-modal="closeModal"/>
  </div>
</template>
<script setup>

import urlFor from "~/utils/fonctions";
import BoutonRetour from "~/components/menu/BoutonRetour.vue";

const showModal = ref(false);
const idSelected = ref(0);

const query = groq`*[_type == "produits" && categorie == "outils"]{
    ...,
    "fichier": fichier.asset->url
    }`;
const { data } = useSanityQuery(query);

const outils = computed(() => {
  return data.value?.map((outil) => {
    return {
      ...outil,
      image: urlFor(outil.image).url(),
      fromSanity: true
    }
  }).sort(function (a, b) {
    return new Date(b._updatedAt) - new Date(a._updatedAt);
  })
});

const outilsSelected = computed(()=>{
  return outils.value.filter((outil) => outil._id === idSelected.value)[0]
})
const closeModal = () => {
  showModal.value = false;
}

const openModal = (id) => {
  idSelected.value = id;
  showModal.value = true;
}
</script>
