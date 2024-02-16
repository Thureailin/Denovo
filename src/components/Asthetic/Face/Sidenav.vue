<template>
  <div>
    <h3 ref="title" class="capitalize text-white cus-heading !font-secondary mb-12">{{ data.title }}</h3>
    <nav id="popularFaceNav">
      <div class="flex flex-col gap-3">
        <router-link ref="list" :key="url.name" v-for="url in urls" class="text-2xl !font-secondary text-white hover:text-black hover:underline hover:font-bold" :to="{ name: url.name }">{{ url.title
        }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ref, onMounted, } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute()

const data = ref({
  title: 'Title',
})

const title = ref(null)
const list = ref(null)

const urls = [
  {
    title: 'Golden HIFU Treatment',
    name: 'asthetic.face.popular-face.hydrating-facial'
  },
  {
    title: 'Laser Toning Treatment',
    name: 'asthetic.face.popular-face.detox-facial'
  },
  { title : 'Pico Toning Treatment',
    name:''
  },
  { title : 'Kyi Tauk Shin Treatment',
    name:''
  },
  { title : 'Co2 Laser Treatment',
    name:''
  },
]

const triggerAnimation = () => {
  let t0 = gsap.timeline({ delay: 0.6 })
let t1 = gsap.timeline({ delay: 0.9 })

  t0.fromTo(
    title.value,
    {
      opacity: 0,
      yPercent: -100,
    },
    {
      opacity: 1,
      duration: 0.3,
      yPercent: 0,
    }
  );

  t1.fromTo('#popularFaceNav a', {
      opacity: 0,
      yPercent: -100,
    },
    {
      opacity: 1,
      duration: 0.3,
      yPercent: 0,
      stagger: 0.3
    })
}

onBeforeRouteUpdate(() => {
  triggerAnimation()
})

onMounted(() => {
  // let title = route.name.split('.')[route.name.split('.').length - 1].replace('-', ' ')
  // console.log(title)
  // data.value.title = title
  data.value.title = route.meta.title
  triggerAnimation()
})
</script>

<style lang="scss" scoped></style>