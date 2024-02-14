<template>
  <div>
    <div class="flex justify-between">
      <div class="max-w-[70%] border shadow">
        <swiper @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="swiperOptions.breakpoints"
          :navigation="swiperOptions.navigation" :modules="modules">
          <swiper-slide v-for="(card, index) in cards" :key="index">
            <DoctorCard :card="card" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="font-secondary">
        <div class="bg-cus-primary p-3 min-w-[300px] max-w-[300px] space-y-3">
          <div class="bg-white p-3 uppercase text-3xl">
            {{ cards[currentCard].name }}
          </div>
          <template v-for="(card, index) in cards">
            <div @click="goToSlide(index)" :class="{ 'underline': currentCard === index }"
              class="capitalize transition-colors p-3 text-2xl hover:cursor-pointer hover:bg-white">{{ card.name }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import DoctorCard from './DoctorCard.vue';
import soeMoeMin from '../../assets/img/about-us/doctors/soe-moe-min.png'
import ayeSuMyatThaung from '../../assets/img/about-us/doctors/aye-su-myat-thaung.png'
import thiriMyoKhaing from '../../assets/img/about-us/doctors/thiri-myo-khaing.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const start = ref(true)
const end = ref(false)

const mySwiper = ref(null)
const currentCard = ref(0)

// swiper start
const modules = [Navigation]

const onSwiper = (swiper) => {
  mySwiper.value = swiper
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
    // 0: {
    //   slidesPerView: 1,
    //   spaceBetween: 20
    // },
    // // when window width is >= 768px
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 40
    // },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }
}
// swiper end

const goToSlide = (page) => {
  mySwiper.value.slideTo(page)
  currentCard.value = page
}


const cards = [
  {
    id: 0,
    name: 'dr soe moe min',
    achievements: [
      'one',
      'two',
      'three'
    ],
    image: soeMoeMin,
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 1,
    name: 'dr thiri myo khaing',
    achievements: [
      'one',
      'two',
      'three'
    ],
    image: thiriMyoKhaing,
    content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
  },
  {
    id: 2,
    name: 'dr aye su myat thaung',
    achievements: [
      'M.B',
      'B.S(Yangon)',
      'M.Sc(Dermatology)(Bangkok) ',
      'Cert.in International Fellowship in Advanced Aesthetic Science(IFAAS)',
      'Cert.in P Paula Skin Cosmetic Surgery and Anti - Aging Institute'
    ],
    image: ayeSuMyatThaung,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint ut pariatur porro debitis! Ex, asperiores! Tempore officia magnam minus voluptatum repellat qui nemo labore voluptate voluptates voluptatibus, id ipsam!            Lorem ipsum dolor sit amet consectetur adipisicing elit.Fugiat quos delectus laudantium eveniet incidunt quibusdam iste exercitationem.Repellendus, minus nihil.Perspiciatis unde praesentium totam ab officia nihil ullam iusto officiis.'
  },
]
</script>

<style scoped></style>