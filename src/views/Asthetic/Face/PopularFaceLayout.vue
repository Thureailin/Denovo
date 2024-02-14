<template>
  <div>
    <div id="astheticHero" class="relative">
      <div class="bg-[url('@/assets/img/asthetic/hero.png')] min-h-[500px] w-100 bg-cover"></div>
      <div class="absolute top-8 left-8">
        <Sidenav />
      </div>
    </div>
      <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Sidenav from '../../../components/Asthetic/Face/Sidenav.vue';
</script>

<style lang="scss" scoped></style>