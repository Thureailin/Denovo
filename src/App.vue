<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Headbar from '@/components/Headbar.vue';
import PageTransition from "./components/Transition/PageTransition.vue"

const route = useRoute()
</script>

<template>
  <div>
    <header>
    <Headbar></Headbar>
  </header>
  <Navbar></Navbar>
    <div>
      <router-view v-slot="{Component}">
      <PageTransition >
       <Component :is="Component" :key="route.path" />
      </PageTransition>
    </router-view>
    </div>
  <Footer></Footer>
  </div>
</template>

<style lang="css" scoped>
</style>