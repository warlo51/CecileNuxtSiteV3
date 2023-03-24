<template>
  <button class="bar textWhite mt-5 rounded-2xl w-3/12 lg:w-1/12" @click="goPrevious">Retour</button>
</template>

<script setup>
const router = useRouter();
const goPrevious = () => {
  router.go(-1)
}
</script>
