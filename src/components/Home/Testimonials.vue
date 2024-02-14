<template>
  <div>
    <div class="relative">
      <swiper @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="swiperOptions.breakpoints"
        :navigation="swiperOptions.navigation" :modules="modules" virtual>
        <swiper-slide v-for="(card,index) in cards" :key="index" :virtualIndex="index">
          <TestimonialCard :card="card" />
        </swiper-slide>
      </swiper>
      <div
        class="absolute top-1/2 -translate-y-1/2 -left-6 sm:left-12 md:-left-8 lg:-left-8 z-20 swiper-button-prev-unique hover:cursor-pointer">
        <ChevronLeftIcon :class="{ 'opacity-50': start }" class="w-12 h-12 text-slate-900" />
      </div>
      <div
        class="absolute top-1/2 -translate-y-1/2 -right-6 sm:right-12 md:-right-8 lg:-right-8 z-20 swiper-button-next-unique hover:cursor-pointer">
        <ChevronRightIcon :class="{ 'opacity-50': end }" class="w-12 h-12 text-slate-900" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Virtual } from 'swiper';
import TestimonialCard from '@/components/Home/TestimonialCard.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const start = ref(true)
const end = ref(false)

// swiper start
const modules = [Navigation, Virtual]

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = (event) => {
  if (event.isEnd) {
    end.value = true
  } else {
    end.value = false
  }

  if (event.isBeginning) {
    start.value = true
  } else {
    start.value = false
  }
};

const swiperOptions = {
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }
}
// swiper end

const cards = [
  {
    id: 1,
    name: 'alexis mickinney',
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 2,
    name: 'alexis mickinney2',
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 3,
    name: 'alexis mickinney3',
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 4,
    name: 'alexis mickinney4',
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 5,
    name: 'alexis mickinney5',
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 6,
    name: 'alexis mickinney6',
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
]
</script>

<style scoped></style>