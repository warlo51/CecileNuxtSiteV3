<template>
  <div class="text-center">
    <BoutonRetour />
  </div>
  <div class="backgroundBeige">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Liste des audios :</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="audio in audios" :key="audio._id" class="group relative cursor-pointer" @click="openModal(audio._id)">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="audio?.image" :alt="audio?.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a>
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ audio.titre }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ audio.gratuit ? "Gratuit" : "Payant" }}</p>
            </div>
            <p v-if="audio?.prix" class="text-sm font-medium text-gray-900">{{ audio?.prix }} €</p>
          </div>
        </div>
      </div>
    </div>
    <ModalBoiteAOutils v-if="showModal" :content="audiosSelected" @close-modal="closeModal"/>
  </div>
</template>
<script setup>

import urlFor from "~/utils/fonctions";
import BoutonRetour from "~/components/menu/BoutonRetour.vue";
const showModal = ref(false);
const idSelected = ref(0);
const query = groq`*[_type == "produits" && categorie == "audios"]{
    ...,
    "fichier": fichier.asset->url
    }`;
const { data } = useSanityQuery(query);

const audios= computed(() => {
  return data.value?.map((audio) => {
    return {
      ...audio,
      image: urlFor(audio.image).url(),
      fromSanity: true
    }
  }).sort(function (a, b) {
    return new Date(b._updatedAt) - new Date(a._updatedAt);
  })
});

const audiosSelected = computed(()=>{
  return audios.value.filter((audio) => audio._id === idSelected.value)[0]
})
const closeModal = () => {
  showModal.value = false;
}

const openModal = (id) => {
  idSelected.value = id;
  showModal.value = true;
}
</script>
