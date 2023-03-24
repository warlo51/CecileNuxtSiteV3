<template>
  <div class="flex flex-col text-sm text-center items-center lg:w-4/12">
    <div class="flex flex-col justify-center items-center border-black border-2 rounded-full w-8/12 mb-5">
      <div>
        <img class="items-center justify-center lg:flex-1 rounded-full" :src="imageToLoad" width="400"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  image: string;
}>();

const imageToLoad = computed<string>(() => {
  return `/images/${props.image}`;
})
</script>
