<script setup>
import { PlayCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import  Testimonials from '@/components/Home/Testimonials.vue';
</script>

<template>
  <main class="mb-12">
    <!-- <img src="@/assets/img/1.png" alt=""> -->
    <!-- hero section -->
    <section>
      <div class="relative h-[600px] bg-[url('@/assets/img/1.png')]">
        <div class="backdrop-blur-sm bg-white/30 w-full h-full">
          <div class="absolute top-[30%] text-center w-full h-full">
            <div>
              <div>
                <h1 class="cus-heading text-cus-primary uppercase mb-12">elevate your look, empower yourself.</h1>
                <a href=""
                  class="p-4 px-9 text-xl border-2 font-bold border-cus-primary text-cus-primary transition-colors hover:bg-cus-primary hover:text-white">Book
                  now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <PlayCircleIcon class="h-12 w-12 text-cus-primary" />
          <p class="text-2xl uppercase font-bold text-cus-primary">play full</p>
        </div>
      </div>
    </section>
    <!-- welcome section -->
    <section class="bg-cus-secondary">
      <div class="container mb-28">
        <div class="text-center flex justify-center px-6 py-9 lg:py-16">
          <div class="max-w-3xl">
            <h1 class="cus-heading text-cus-primary mb-3 uppercase lg:mb-12">welcome! your the clinic de novo experience
              starts here</h1>
            <p class="leading-6 lg:leading-loose">
              Welcome to The Clinic De Novo, where your timeless beauty awaits! We are providing the variety of aesthetic,
              dermatology, & plastic surgery services from head to toe by certified plastic surgeons, doctors and staffs
              in luxurious setting utilizing the high-quality products and machines together with premium service to bring
              out the delightful results to our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- asthetic services -->
    <section>
      <div class="xl:hidden">
        <div
          class="bg-[url('@/assets/img/home/1.png')] h-[300px] bg-center bg-no-repeat bg-cover border mx-auto shadow md:h-[500px]">
        </div>
        <div class="container px-6 mb-28">
          <div class="p-6 space-y-3 shadow bg-cus-secondary -mt-12 lg:space-y-6">
            <h2 class="cus-heading text-cus-primary">AESTHETIC SERVICES</h2>
            <p class="leading-6 lg:leading-loose">
              Looking to enhance your natural beauty and achieve a youthful, radiant glow? Look no further than our
              comprehensive range of aesthetic services. Our state-of-the-art facilities are equipped with the latest
              technologies and techniques, ensuring that each treatment is tailored to your unique needs and preferences
            </p>
            <a href="" class="group transition-colors inline-flex items-center gap-3">
              <span class="font-semibold text-md text-cus-primary group-hover:!text-gray-900">View more</span>
              <div class="inline-flex p-2 border border-cus-primary rounded-full group-hover:!border-gray-900">
                <ChevronRightIcon class="inline w-6 h-6 mr-0 text-cus-primary group-hover:stroke-gray-900" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="hidden mb-28 xl:block">
        <div
          class="bg-[url('@/assets/img/home/1.png')] w-[60vw] bg-center bg-no-repeat bg-cover border shadow lg:h-[500px]">
          <div class="grid items-center justify-items-end ml-[300px] h-[500px] w-full">
            <div class="w-[600px] bg-cus-secondary p-6 space-y-3 shadow lg:space-y-6">
              <h2 class="cus-heading text-cus-primary">AESTHETIC SERVICES</h2>
              <p class="leading-6 lg:leading-loose">
                Looking to enhance your natural beauty and achieve a youthful, radiant glow? Look no further than our
                comprehensive range of aesthetic services. Our state-of-the-art facilities are equipped with the latest
                technologies and techniques, ensuring that each treatment is tailored to your unique needs and preferences
              </p>
              <a href="" class="group inline-flex items-center gap-3">
                <span class="font-semibold text-md text-cus-primary group-hover:text-gray-900">View more</span>
                <div class="inline-flex p-2 border border-cus-primary rounded-full group-hover:border-gray-900">
                  <ChevronRightIcon class="inline w-6 h-6 mr-0 text-cus-primary group-hover:stroke-gray-900" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- surgery services -->
    <section>
      <div class="xl:hidden">
        <div
          class="bg-[url('@/assets/img/home/2.png')] h-[300px] bg-center bg-no-repeat bg-cover border mx-auto shadow md:h-[500px]">
        </div>
        <div class="container px-6 mb-28">
          <div class="p-6 space-y-3 shadow bg-cus-secondary -mt-12 lg:space-y-6">
            <h2 class="cus-heading text-cus-primary">PLASTIC SURGERY SERVICES</h2>
            <p class="leading-6 lg:leading-loose">
              Looking to enhance your appearance and boost your confidence? Our plastic surgery services offer a range
              of safe, effective, and personalized treatments to help you achieve your aesthetic goals. At The Clinic
              De Novo Plastic Surgery Center, our team of highly skilled and experienced plastic surgeons is dedicated
              to providing the highest quality of care.
            </p>
            <a href="" class="group transition-colors inline-flex items-center gap-3">
              <span class="font-semibold text-md text-cus-primary group-hover:text-gray-900">View more</span>
              <div class="inline-flex p-2 border border-cus-primary rounded-full group-hover:border-gray-900">
                <ChevronRightIcon class="inline w-6 h-6 mr-0 text-cus-primary group-hover:text-gray-900" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="hidden mb-28 xl:block">
        <div class="flex justify-end">
          <div
            class="h-[500px] w-[60vw] bg-[url('@/assets/img/home/2.png')] bg-center bg-no-repeat bg-cover border shadow">
            <div class="grid items-center -ml-[300px] h-[500px] w-full">
              <div class="w-[600px] bg-cus-secondary p-6 space-y-3 shadow lg:space-y-6">
                <h2 class="cus-heading text-cus-primary">PLASTIC SURGERY SERVICES</h2>
                <p class="leading-6 lg:leading-loose">
                  Looking to enhance your appearance and boost your confidence? Our plastic surgery services offer a range
                  of safe, effective, and personalized treatments to help you achieve your aesthetic goals. At The Clinic
                  De Novo Plastic Surgery Center, our team of highly skilled and experienced plastic surgeons is dedicated
                  to providing the highest quality of care.
                </p>
                <a href="" class="group transition-colors inline-flex items-center gap-3">
                  <span class="font-semibold text-md text-cus-primary group-hover:text-gray-900">View more</span>
                  <div class="inline-flex p-2 border border-cus-primary rounded-full group-hover:border-gray-900">
                    <ChevronRightIcon class="inline w-6 h-6 mr-0 text-cus-primary group-hover:text-gray-900" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
<!-- bg-[url('@/assets/img/home/testimonialbg.png')] -->
      <div class=" bg-no-repeat bg-[length:100%_100%] h-[900px]">
        <div class="flex flex-col justify-center h-full bg-cus-primary">
          <div class="container px-6 pb-36">
            <h2 class="cus-heading text-gray-200 text-center mb-12">Testimonials</h2>
            <Testimonials />
          </div>
        </div>
      </div>
    </section>

    <!-- get in touch -->
    <section>
      <div class="container px-6 pb-24">
        <div class="text-center space-y-6 bg-cus-primary text-white p-6 lg:p-12 lg:space-y-9">
          <h2 class="cus-heading uppercase">Get in touch</h2>
          <p class="leading-6 lg:leading-loose">
            If you have any questions or would like to schedule a consultation, please don't hesitate to get in touch with
            us. We would be happy to answer any questions you may have and help you
            find the perfect treatment for your needs.
          </p>
          <div class="flex flex-col justify-center gap-3 md:flex-row">
            <div>
              <a class="text-white inline-block bg-transparent border-2 border-white rounded-sm p-3 transition-colors hover:bg-white hover:text-cus-primary"
                href="">Book an appointment</a>
            </div>
            <div>
              <a class="text-white inline-block bg-transparent border-2 border-white rounded-sm p-3 transition-colors hover:bg-white hover:text-cus-primary"
                href="">Request A Call Back</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
