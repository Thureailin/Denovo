<template>
  <div class="relative" data-te-dropdown-ref>
    <a class="flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 leading-normal text-white transition duration-150 ease-in-out"
      href="#" type="button" id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false"
      data-te-ripple-init data-te-ripple-color="light">
      {{ props.url.name }}
      <span class="ml-2 w-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </a>
    <ul
      class="absolute z-[1000] float-left w-full !mt-[11px] hidden min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
      aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
      <NavItem v-for="url in props.url.dropdown.urls"
        class="block w-full whitespace-nowrap bg-transparent p-1 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#" :url="url" data-te-dropdown-item-ref>{{ url.name }}</NavItem>
    </ul>
  </div>
</template>

<script setup>
import NavItem from './partials/NavItem.vue';

const props = defineProps(['url'])
</script>

<style lang="scss" scoped></style>