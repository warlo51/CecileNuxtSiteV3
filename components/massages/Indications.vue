<template>
  <div class="mt-20 flex flex-col justify-center items-center lg:p-10 backgroundWhite relative">
    <p class="absolute top-2 lg:top-20 lg:left-40 lg:text-2xl font-bold ">Les contres indications</p>

    <div class="text-justify text-sm p-4 flex flex-col lg:text-justify xl:text-justify lg:text-lg xl:text-2xl lg:pl-32 lg:pr-32 lg:pt-32 pt-16">
      <p>Ils n’est pas recommandé de venir vous faire masser si vous présenter les symptômes suivants :</p>
      <ul>
        <li> -  Fièvre</li>
        <li> -  Syndrome grippal</li>
        <li> -  Rhume, sinusite</li>
        <li> -  Inflammation de la peau</li>
        <li> -  Eviter la période après digestion (2h après un repas)</li>
      </ul>
      <p>Si vous êtes enceinte, contactez-moi pour en discuter, cela dépendra de votre mois de gestation et du
        type de massage.</p>
      <a href="/Contact">
        <button @mouseenter="showArrow" @mouseleave="hiddenArrow" class="bar textWhite text-2xl p-2 mt-10 flex flex-row">
          Contact
          <div v-if="arrow">
            <Icon name="ph:arrow-fat-left-fill" class="mr-1 rotate-180 ml-3 "/>
          </div>

        </button>
      </a>
      <span class="font-bold mt-10">Je masse les femmes et exceptionnellement les hommes (conjointd'une cliente etc...)</span>
    </div>
  </div>
</template>
<script setup>


</script>
