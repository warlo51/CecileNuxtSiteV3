<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="flex flex-col p-10">
            <div class="flex flex-row p-2 mt-3 border-gray border-b-2 relative">
              <p class="w-10/12 textePurple font-bold lg:text-3xl lg:w-11/12">Shiro Abhyanga</p>
              <Icon @click="emits('closeModal')" name="carbon:close-outline" class="text-xl absolute right-3 top-3 cursor-pointer"/>
            </div>
            <div class="text-justify p-3">
              <p>
                C’est un massage du haut du dos, des épaules et du cuir chevelu. Ce soin à pour but d’apaiser le mental et les tensions dû au stress qui s’accumulent dans le haut du corps.
              </p>
              <br>
              <p class="italic">
                Durée du massage : entre 20-30min selon votre profil ayurvédique
              </p>
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
