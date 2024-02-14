<template>
  <div class="mb-[50px] w-full flex justify-center">
    <div
      class="relative max-w-[280px] bg-white rounded-t-lg p-4 border inline-block space-y-3 text-center border-b-[10px] shadow-sm border-b-gray-800 pb-20 lg:pb-20 lg:p-12 lg:space-y-6 lg:max-w-[350px]">
      <h3 class="cus-heading !text-xl text-cus-primary uppercase lg:!text-2xl">{{ card.name }}</h3>
      <p class="leading-6 lg:leading-loose">
        {{ card.content }}
      </p>
      <img class="absolute w-28 left-1/2 -bottom-14 -translate-x-1/2 rounded-full"
        src="https://xsgames.co/randomusers/avatar.php?g=male">
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    default: {
      name: 'alexis mickinney2',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!'
    },
  }
})
</script>

<style lang="scss" scoped></style>