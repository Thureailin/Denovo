<template>
  <div class="w-full flex justify-center">
    <div
      class="relative max-w-[1000px] bg-white rounded-t-lg p-4 inline-block space-y-3 text-center">
      <div class="grid grid-cols-2">
        <img class="w-[500px]" :src="card.image">
        <div class="text-left p-3 space-y-3">
          <h3 class="cus-heading !text-xl text-cus-primary uppercase lg:!text-2xl !font-bold !font-secondary">{{ card.name }}</h3>
          <div class="text-cus-primary space-y-2 font-secondary font-semibold">
            <h5 class="text-lg capitalize" v-for="each in card.achievements">{{ each }}</h5>
          </div>
          <p class="leading-6 lg:leading-loose">
            {{ card.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    default: {
      name: 'alexis mickinney2',
      achievements: [
        'one',
        'two',
        'three'
      ],
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
    },
  }
})
</script>

<style lang="scss" scoped></style>