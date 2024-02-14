<template>
  <div>
    <Hero title="our story" />
    <section class="">
      <div class="container my-14">
        <div class="max-w-[1000px] mx-auto">
          <h3 class="cus-subheading text-center mb-12 text-cus-primary !font-secondary !font-bold">
            ABOUT THE CLINIC DE NOVO
          </h3>
          <div class="space-y-6 leading-9 indent-12">
            <p>
              The Clinic De Novo is founded in 2018 and we have been in the aesthetic market for 6 years as a registered
              specialist clinic with a strong base of customers providing both invasive and non-invasive treatments
              including
              Plastic Surgery.
            </p>
            <p>
              At The Clinic De Novo, we always strive to provide five star services to our clients and thus we believe in
              investing our resources in people and top-notch technologies that will bring delightful results to our
              clients
              in
              shortest time possible and in most cost-efficient way. We are committed to providing safe, effective, and
              personalized treatments that deliver natural-looking results and exceed our clients' expectations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="bg-[url('@/assets/img/about-us/bg.png')] w-full bg-[length:100%_100%]">
        <div class="container mx-auto">
          <div class="grid grid-cols-3 gap-3 justify-items-center pt-[70px] pb-[30px]">
            <div class="w-[300px] relative bg-white text-cus-primary p-3 bg-opacity-95 shadow-lg">
              <div
                class="bg-[url('@/assets/img/about-us/pro/img1.png')] w-[100px] h-[100px] absolute bg-[length:100%_100%] z-10 left-1/2 -translate-x-1/2 -top-[50px]">
              </div>
              <h1 class="cus-subheading mt-[60px] mb-6 capitalize font-secondary text-center text-cus-primary">
                <span class="text-4xl font-bold">o</span>ur <span class="text-4xl font-bold">m</span>ission
              </h1>
              <ul class="space-y-3 font-secondary mb-6">
                <li>
                  To provide the best & safety treatment outcomes.
                </li>
                <li>
                  To provide premium client experience.
                </li>
                <li>
                  Well-experienced & Certified Professionals.
                </li>
                <li>
                  Reasonable Prices.
                </li>
              </ul>
            </div>
            <div class="w-[300px] relative bg-white text-cus-primary p-3 bg-opacity-95 shadow-lg">
              <div
                class="bg-[url('@/assets/img/about-us/pro/img2.png')] w-[100px] h-[100px] absolute bg-[length:100%_100%] z-10 left-1/2 -translate-x-1/2 -top-[50px]">
              </div>
              <h1 class="cus-subheading mt-[60px] mb-6 capitalize font-secondary text-center text-cus-primary">
                <span class="text-4xl font-bold">o</span>ur
                <span class="text-4xl font-bold">v</span>ision
              </h1>
              <ul class="space-y-3 font-secondary mb-6">
                <li>
                  To become the most trusted aesthetic & plastic surgery clinic in Myanmar.
                </li>
                <li>
                  To help bring out the best self in our clients.
                </li>
                <li>
                  To be known for availability of variety of treatments from head to toe.
                </li>
              </ul>
            </div>
            <div class="w-[300px] relative bg-white text-cus-primary p-3 bg-opacity-95 shadow-lg">
              <div
                class="bg-[url('@/assets/img/about-us/pro/img3.png')] w-[100px] h-[100px] absolute bg-[length:100%_100%] z-10 left-1/2 -translate-x-1/2 -top-[50px]">
              </div>
              <h1 class="cus-subheading mt-[60px] mb-6 capitalize font-secondary text-center text-cus-primary">
                <span class="text-4xl font-bold">c</span>ore
                <span class="text-4xl font-bold">v</span>alues
              </h1>
              <ul class="space-y-3 font-secondary mb-6">
                <li>
                  Integrity
                </li>
                <li>
                  Quality of Service
                </li>
                <li>
                  Professionalism
                </li>
                <li>
                  Team work
                </li>
                <li>
                  Always Learning
                </li>
              </ul>
            </div>
          </div>
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