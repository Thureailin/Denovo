<script setup>
import { RouterLink } from "vue-router";

const urls = [
  { name: "Home", url: "home" },
  { name: "Asthetic", url: "asthetic" },
  { name: "Plastic Surgery", url: "plastic-surgery" },
  { name: "About Us", url: "about-us" },
  { name: "Resources", url: "resources" },
  { name: "Special Offer", url: "special-offer" },
  { name: "Contact Us", url: "contact-us" },
];
</script>

<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="bg-cus-secondary text-gray-600">
      <div class="container">
        <div class="grid grid-cols-2 gap-8 px-6 py-8 lg:grid-cols-7">
          <div class="lg:col-span-2">
            <h2 class="mb-6 text-sm font-semibold uppercase dark:text-gray-400">
              Company
            </h2>
            <ul class="">
              <li v-for="(url, index) in urls" :key="index" class="mb-2">
                <RouterLink
                  class="mb-4 hover:underline"
                  :to="{ name: url.url }"
                  >{{ url.name }}</RouterLink
                >
              </li>
            </ul>
          </div>
          <div
            class="col-span-2 lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h2
                class="mb-6 text-sm font-semibold uppercase dark:text-gray-400"
              >
                Address
              </h2>
              <div class="text-md">
                <h1 class="text-[#a57c00] text-[18px] mb-2">Aesthetic Center</h1>
                <p>
                  Block A-1, No-001, Corner of Hanthawaddy Road and Hnin Si
                  Street, Yuzana Hi-Way Complex, Kamaryut Township, Yangon,
                  Myanmar.
                </p>

                <h1 class="mt-5 text-[#a57c00] text-[18px] mb-2">Plastic Surgery Center</h1>
                <p class="">Block A-1, No-006, Hain Si Street, Yuzana Hi-Way Complex, Kamaryut Township, Yangon, Myanmar.

</p>
              </div>
            </div>
            <div class="lg:ml-36">
              <h2
                class="mb-6 text-sm font-semibold uppercase dark:text-gray-400"
              >
                Contact Us
              </h2>
              <ul class="dark:text-gray-400">
                <h1 class="text-[#a57c00] text-[18px] mb-2">Aesthetic Center</h1>
                <p class="mb-3">09-968 119 995, 09-400 779995</p>
                <h1 class="mt-5 text-[#a57c00] text-[18px] mb-2">Plastic Surgery Center</h1>

                <p class="mb-3">09-456 996 990</p>
                <li class="mb-3">
                  <!-- <a
                    href="mailto:clinicdenovo@gmail.com"
                    class="hover:underline"
                    >clinicdenovo<br class="hidden lg:block" />@gmail.com</a
                  > -->
                  <a>theclinicdenovo@gmail.com</a>
                </li>
                <li class="mb-3 flex">
                  <a
                    href="https://www.instagram.com/theclinicdenovoaesthetic/p/CzsZoCOpk6-/"
                    class="hover:text-gray-900 dark:hover:text-white mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                    <span class="sr-only">Instagram page</span>
                  </a>
                  <a
                    href="https://www.facebook.com/TheClinicDeNovo?mibextid=LQQJ4d"
                    class="hover:text-gray-900 dark:hover:text-white mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      />
                    </svg>
                    <span class="sr-only">Facebook page</span>
                  </a>

                  <a href='https://www.tiktok.com/@denovo66?_r=1&_d=dbf81c4jah24hd&sec_uid=MS4wLjABAAAANDaJIl5-avLsntsPEGQtlZEne6FrYSwflfkIKt57GI9IY4o9oZDDt13dA64zdJ7w&share_author_id=7239628873766880274&sharer_language=en&source=h5_m&u_code=d0l6cah54g0447&ug_btm=b6880,b5836&sec_user_id=MS4wLjABAAAAuhjb3tTIZR-daRzbtxDOpXS7vd0LKy-5LrvQ6mtpztoAsUs68xwTHWYvwN4V1AFT&utm_source=copy&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=copy&user_id=6572752724751777793&enable_checksum=1&share_link_id=6EB3B787-294D-4FD0-BA90-6B5FE3C4542B&share_app_id=1233' class="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1rem"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                      />
                    </svg>
                  </a>
                  <a href="https://youtube.com/@theclinicdenovo?si=s_AQYyZplZ07WH60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-cus-side dark:bg-gray-700">
      <div class="container">
        <div class="px-4 py-6 text-center">
          <span class="text-gray-100 text-sm sm:text-center"
            >Copyright © 2023. The Clinic De Novo. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
