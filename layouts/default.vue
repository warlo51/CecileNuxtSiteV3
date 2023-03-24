<template >
  <TopBanner />
  <slot class="bg-amber-200"/>
  <Footer />
</template>
<script setup>

import TopBanner from "~/components/menu/TopBanner.vue";
import Footer from "~/components/menu/Footer.vue";
</script>
