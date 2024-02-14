<template>
  <div class="bg-gradient-to-b from-[#fcf4df] via-[#fcf4df] to-[#cc9933] md:bg-gradient-to-r">
    <div class="container">
      <div class="flex flex-col gap-5 py-3 md:flex-row lg:py-0">
        <!-- <div class="w-[200px] h-[160px] mx-auto flex-none lg:w-[345px] lg:h-[150px]">
          <img src="@/assets/img/logo.png" alt="">
        </div> -->
        <img src="@/assets/img/logo.png" class="w-[200px] h-[160px]" alt="">
        <div class="mx-auto flex flex-col gap-3 text-sm mb-3 md:flex-row lg:gap-12 lg:ml-auto lg:mb-0">
          <div class="flex items-center lg:h-[150px]">
            <div class="flex items-center gap-3">
              <div class="bg-cus-primary inline-block rounded-full p-1">
                <MapPinIcon class="h-6 w-6 text-white" />
              </div>
              <p class="capitalize font-semibold text-cus-primary
                  ">find us at
                <br>
                <span class="text-xs">google map</span>
              </p>
            </div>
          </div>
          <div class="flex items-center lg:h-[150px]">
            <div class="flex items-center gap-3">
              <div class="bg-cus-primary inline-block rounded-full p-1">
                <ClockIcon class="h-6 w-6 text-white" />
              </div>
              <p class="capitalize font-semibold text-cus-primary
              ">
                10:00 - 7:00 <br>
                <span class="text-xs">Monday - Sunday</span>
              </p>
            </div>
          </div>
          <div class="flex items-center lg:h-[150px]">
            <div class="flex items-center gap-3">
              <div class="bg-cus-primary inline-block rounded-full p-1">
                <PhoneIcon class="h-6 w-6 text-white" />
              </div>
              <p class="capitalize font-semibold text-cus-primary
              ">
                Call or chat <br>
                <span class="text-xs">09-986 119 995, 09-456 996 99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/vue/24/solid'
</script>

<style lang="scss" scoped></style>