<template>
  <div id="accordionExample">
    <div class="bg-white dark:border-neutral-600 dark:bg-neutral-800">
      <h2 class="mb-0" id="headingOne">
        <button @click="toggleExpand" :class="{'!text-black' : !expand, '!text-primary' : expand}"
          class="group relative font-secondary flex justify-start w-full items-center rounded-t-[15px] border-0 bg-white py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
          type="button" data-te-collapse-init :data-te-target="`#${payload?.id}`" aria-expanded="true"
          :aria-controls="payload?.id">
          <!-- <span
            class="h-5 w-5 me-3 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span> -->
          <span v-if="!expand">
            <PlusIcon class="w-6 h-6" />
          </span>
          <span v-if="expand">
            <MinusIcon class="w-6 h-6" />
          </span>
          <h6 class="ml-3">{{ payload?.button }}</h6>
        </button>
      </h2>
      <div :id="payload.id" class="!visible h-0 overflow-hidden" data-te-collapse-item aria-labelledby="headingOne"
        data-te-parent="#accordionExample">
        <div class="px-5 py-4">
          <h3 class="font-bold mb-3 uppercase !font-secondary">{{ payload?.content.header }}</h3>
          <p>
            {{ payload?.content?.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/outline';

defineProps(['payload'])

const expand = ref(false)

const toggleExpand = () => {
  expand.value = !expand.value
}
</script>

<style lang="scss" scoped></style>