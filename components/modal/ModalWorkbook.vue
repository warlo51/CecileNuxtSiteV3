<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col">
            <div class="flex flex-row p-10 border-gray border-b-2 relative">
              <p class="w-10/12 textePurple font-bold lg:text-2xl lg:w-11/12">Téléchargez votre CADEAU !</p>
              <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            </div>
            <div class="p-5">
              <img src="@/assets/images/BoiteAOutils.png"/>
            </div>
            <div class="text-center">
              <p class="textePurple font-bold lg:text-2xl">& retrouvez votre équilibre santé en seulement 3 étapes !</p>
              <p>
                J'adore faire des cadeaux ! <br>
                Je vous offre ce workbook gratuit afin de vous aider à vous connaitre davantage et à enclencher dès maintenant, en toute autonomie, des actions somples
                pour votre mieux-etre
              </p>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 text-center">
              <a href="https://yogavedasante.systeme.io/b8a6e197" target="_blank" @click="emits('closeModal')">
                <button type="button" class="inline-flex w-full justify-center rounded-md bar px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                  JE LE VEUX !
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
