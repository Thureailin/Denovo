<template>
  <div>
    <Hero title="our team" />
    <section>
      <div class="container my-16">
        <div class="">
          <h3 class="text-3xl mb-12 font-bold font-secondary text-center">Our Doctors</h3>
          <OurDoctors />
        </div>
      </div>
    </section>
    <section>
      <div class="container my-16">
        <h3 class="text-3xl mb-12 font-bold font-secondary text-center">Our Team</h3>
        <TeamSlide />
      </div>
    </section>
    <OurCenters />
  </div>
</template>

<script setup>
import OurCenters from '../../components/AboutUs/OurCenters.vue';
import Hero from '../../components/AboutUs/Hero.vue'
import OurDoctors from '../../components/AboutUs/OurDoctors.vue';
import TeamSlide from '../../components/AboutUs/TeamSlide.vue';
</script>

<style lang="scss" scoped></style>