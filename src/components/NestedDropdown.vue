<template>
  <div class="relative" :class="{ 'text-black': isActiveNestedRoute, 'text-white': !isActiveNestedRoute }"
    data-te-dropdown-ref>
    <a class="flex items-center whitespace-nowrap px-6 py-2 transition duration-150 ease-in-out" href="#" type="button"
      id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init
      data-te-ripple-color="light">
      {{ url.name }}
      <span class="ml-2 w-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </a>
    <ul v-if="url.nested.urls"
      class="absolute w-full z-[1000] top-0 float-left m-0 !mt-3 hidden list-none border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
      aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>

      <!-- <li>
        <div class="group">
          <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#" data-te-dropdown-item-ref>Face</a>
          <div class="absolute hidden top-0 left-[100%] w-[300px] min-h-[100px] bg-pink-100 p-3 group-hover:block z-[1001]">
            <ul class="[&>*]:mb-3">
              <NavItem class="!text-black !font-normal" :url="{ name: 'Popular Face', url: 'asthetic.face.popular-face' }" />
              <NavItem class="!text-black !font-normal" :url="{ name: 'Popular Face', url: 'asthetic.face.popular-face' }" />
              <NavItem class="!text-black !font-normal" :url="{ name: 'Popular Face', url: 'asthetic.face.popular-face' }" />
              <NavItem class="!text-black !font-normal" :url="{ name: 'Popular Face', url: 'asthetic.face.popular-face' }" />
            </ul>
          </div>
        </div>
      </li>
      <li>
        <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          href="#" data-te-dropdown-item-ref>Body</a>
      </li>
      <li>
        <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          href="#" data-te-dropdown-item-ref>Skin Care</a>
      </li> -->

      <li v-if="url.nested.urls" v-for="nestedUrl in url.nested.urls">
        <div class="group">
          <div class="relative">
            <a class="block bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref><span class="block w-[120px]">{{ nestedUrl.name }}</span></a>
            <ChevronRightIcon class="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 text-black" />
          </div>
          <div
            :class="{'group-hover:block': nestedUrl.urls}"
            class="absolute hidden top-0 left-[100%] w-[300px] min-h-[100px] bg-pink-100 p-3 z-[1001]">
            <ul class="[&>*]:mb-3">
              <NavItem v-for="childNestedUrl in nestedUrl.urls" class="!text-black !font-normal hover:!font-semibold"
                :url="childNestedUrl" />
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import NavItem from './partials/NavItem.vue';

const props = defineProps(['url'])

const route = useRoute()

const isActiveNestedRoute = computed({
  get() {
    let matchRoute = route.matched.find(each => each.name === props.url.url)
    return matchRoute ? true : false
  }
})
</script>

<style scoped></style>