<template>
  <div>
    <Hero title="our center" />
    <section class="">
      <div class="container my-14">
        <div class="grid grid-cols-2 gap-12 justify-between">
          <div>
            <div class="text-center">
              <h3
                class="text-3xl capitalize !font-secondary border-4 p-3 border-cus-primary text-center inline-block mb-6">
                Asthetic Center</h3>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <img src="../../assets/img/about-us/asthetic/img1.png" class="h-[250px] w-full" alt="">
              </div>
              <div>
                <img src="../../assets/img/about-us/asthetic/img2.png" class="h-[250px] w-full" alt="">
              </div>
              <div>
                <img src="../../assets/img/about-us/asthetic/img3.png" class="h-[250px] w-full" alt="">
              </div>
              <div>
                <img src="../../assets/img/about-us/asthetic/img4.png" class="h-[250px] w-full" alt="">
              </div>
            </div>
          </div>
          <div>
            <div class="text-center">
              <h3
                class="text-3xl capitalize !font-secondary border-4 p-3 border-cus-primary text-center inline-block mb-6">
                Plastic Surgery
                Center</h3>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="grid grid-rows-2 gap-3">
                <div>
                  <img src="../../assets/img/about-us/plastic/img1.png" class="h-[250px]" alt="">
                </div>
                <div>
                  <img src="../../assets/img/about-us/plastic/img2.png" class="h-[250px]" alt="">
                </div>
              </div>
              <div>
                <img src="../../assets/img/about-us/plastic/img3.png" class="h-full" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container my-24">
        <div class="flex justify-center">
          <!-- <video width="900" height="600" controls>
          <source src="../../assets/videos/about-us/promo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video> -->
        </div>
      </div>
    </section>
    <OurCenters />
  </div>
</template>

<script setup>
import OurCenters from '../../components/AboutUs/OurCenters.vue';
import Hero from '../../components/AboutUs/Hero.vue'
</script>

<style lang="scss" scoped></style>