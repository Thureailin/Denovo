<template>
  <div class="w-100 h-100 hero-slide-card bg-cus-primary">
    <img :src="card.img" class="w-full object-cover" alt="">
  </div>
  <!-- <h3 class="cus-heading !text-xl text-white uppercase lg:!text-2xl">{{ card.name }}</h3> -->
</template>

<script setup>
defineProps(['card'])
</script>

<style scoped>
.hero-slide-card {
  position: relative;
  z-index: 20;
}
</style>