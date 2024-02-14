<template>
  <swiper :effect="'coverflow'" :initialSlide="1" @slideChange="onSlideChange" :grabCursor="true" :centeredSlides="true"
    :breakpoints="swiperOptions.breakpoints" :navigation="swiperOptions.navigation" :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="card in cards">
      <TeamCard :card="card" />
    </swiper-slide>
    <div class="absolute top-1/2 -translate-y-1/2 left-0 z-20 swiper-button-prev-unique hover:cursor-pointer">
      <ChevronLeftIcon :class="{ 'opacity-50': start }" class="w-12 h-12 text-slate-900" />
    </div>
    <div class="absolute top-1/2 -translate-y-1/2 right-0 z-20 swiper-button-next-unique hover:cursor-pointer">
      <ChevronRightIcon :class="{ 'opacity-50': end }" class="w-12 h-12 text-slate-900" />
    </div>
  </swiper>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import TeamCard from './TeamCard.vue';
import team1 from '../../assets/img/about-us/team/team1.png'
import team2 from '../../assets/img/about-us/team/team2.png'
import team3 from '../../assets/img/about-us/team/team3.png'
import team4 from '../../assets/img/about-us/team/team4.png'
import team5 from '../../assets/img/about-us/team/team5.png'
import team6 from '../../assets/img/about-us/team/team6.png'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Navigation } from "swiper";

const cards = [
  {
    name: 'arfi men1',
    img: team1
  },
  {
    name: 'arfi men2',
    img: team2
  },
  {
    name: 'arfi men3',
    img: team3
  },
  {
    name: 'arfi men3',
    img: team4
  },
  {
    name: 'arfi men3',
    img: team5
  },
  {
    name: 'arfi men3',
    img: team6
  },
]

const start = ref(true)
const end = ref(false)

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

const modules = [EffectCoverflow, Navigation]

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
      slidesPerView: 2.7,
      spaceBetween: 60
    }
  },
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }
}


</script>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
}

.swiper-slide img {
  display: block;
}

.swiper-wrapper {
  overflow: hidden;
}
</style>