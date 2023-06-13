<template>
  <div class="flex flex-col">
    <div class="web-center">
      <img src="/images/logoFooter.png" class="w-6/12 lg:w-3/12"/>
    </div>
    <div class="flex flex-col lg:flex-row text-sm text-center items-center bar textWhite">
      <div class="mb-10 lg:w-4/12 lg:justify-center">
        <ul class="flex flex:row space-x-10 lg:flex-row lg:space-x-0 lg:space-x-5 lg:justify-center mt-10 lg:mt-5">
          <li><a href="https://m.facebook.com/yogatherapiebycecile/"><img src="@/assets/images/logoFacebook.png" width="30"/></a></li>
          <li><a href="https://www.instagram.com/yogavedasante/?hl=nb"><img src="@/assets/images/logoInstagram.png" width="30"/></a></li>
        </ul>
      </div>
      <div class="mb-10 mt-10 lg:mt-0 lg:w-4/12 lg:ml-3">
        <ul class="mt-5 border-amber-50 border-2 rounded-2xl p-5">
          <li>Cécile FABIÉ</li>
          <li><Icon name="ph:envelope" class="mr-1"/>cecile.fabie@gmail.com</li>
          <li><Icon name="ph:phone" class="mr-1"/>06.27.41.10.49</li>
        </ul>
      </div>
      <div class="mb-10 mt-10 lg:w-4/12 lg:flex lg:flex-row lg:justify-center">
        <ul class="mb-10 text-center lg:flex lg:flex-row lg:justify-center space-x-10 hover:cursor-pointer">
          <li>CGV</li>
          <li @click="openModalOtherModal('ML')">Mentions légales</li>
          <li  @click="openModalOtherModal('P')">Politique de confidentialité</li>
          <ModalMentionLegalFooter v-if="isOpenML" @close-modal="closeModalOtherModal('ML')"/>
          <ModalPolitiqueFooter v-if="isOpenP" @close-modal="closeModalOtherModal('P')"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const isOpenML = ref(false);
const isOpenP = ref(false);

const closeModalOtherModal = (modal: string) => {
  if(modal === 'ML') {
    isOpenML.value = false;
  } else if(modal === 'P') {
    isOpenP.value = false;
  }
}

const openModalOtherModal = (modal: string) => {
  if(modal === 'ML') {
    isOpenML.value = true;
  } else if(modal === 'P') {
    isOpenP.value = true;
  }
}
</script>

