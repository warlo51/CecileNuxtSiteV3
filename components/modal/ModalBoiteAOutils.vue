<template>
  <div class="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-20 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full lg:w-8/12">
          <div class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            <div class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img :src="content?.image" :alt="content?.image" class="object-cover object-center" />
            </div>
            <div class="sm:col-span-8 lg:col-span-7 mt-20 p-10">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{{ content.titre }}</h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p v-if="content?.prix" class="text-2xl text-gray-900">{{ content?.prix }} €</p>
                <p v-else class="text-2xl text-gray-900">Gratuit</p>

                <!-- Reviews -->
              </section>

              <section aria-labelledby="options-heading" class="mt-10">
                <h3 id="options-heading" class="sr-only">Product options</h3>
                <form>
                  <!-- Colors -->
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{content.description}}</p>
                  </div>

                  <a v-if="!content.prix" :href="content.fichier" target="_blank" @click="emits('closeModal')" :download="content.titre" ><button type="button" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bar py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Télécharger</button></a>
                  <a v-else ><button type="button" @click="goToPaiment(content)" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bar py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Télécharger</button></a>
                </form>
              </section>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import axios from "axios";

const props = defineProps<{
  open: boolean;
  content: any;
}>();

const emits = defineEmits<(e: "closeModal") => void>();

const goToPaiment = (content: any) => {
  axios.post('/api/achats/test', { body: { priceCode: content.priceCode } }).then((re) => console.log(re))
}
</script>
