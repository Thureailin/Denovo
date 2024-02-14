<template>
  <li class="lg:pr-2">
    <router-link v-bind="$attrs" :to="{ name: url.url }"
      class="text-gray-100 font-semibold transition-colors hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 lg:px-2"
      data-te-nav-link-ref>{{ url.name }}</router-link>
  </li>
</template>
<script setup>
defineProps([
  'url'
])
</script>

<style lang="scss" scoped></style>