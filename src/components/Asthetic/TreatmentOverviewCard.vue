<template>
  <div>
    <div class="flex items-center gap-3">
      <!-- <CurrencyDollarIcon class="w-14 h-14 text-cus-secondary" /> -->
      <slot name="icon"></slot>
      <div class="flex flex-col gap-2">
        <span class="font-semibold font-secondary capitalize">{{ payload.title }}</span>
        <span v-if="payload.status" class="text-sm text-cus-primary font-bold font-secondary capitalize">{{ payload.status }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['payload'])
</script>

<style lang="scss" scoped></style>