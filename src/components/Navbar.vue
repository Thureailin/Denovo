<script setup>
import { ref } from 'vue';
import NavItem from '@/components/partials/NavItem.vue';
import NestedDropdown from './NestedDropdown.vue';
import Dropdown from './Dropdown.vue';

const urls = [
  { name: 'Home', url: 'home', nestedDropdown: false },
  {
    name: 'Asthetic',
    url: 'asthetic',
    nestedDropdown: true,
    nested: {
      urls: [
        {
          name: 'Face',
          urls: [
            { name: 'Popular treatment', url: 'asthetic.face.popular-face' },
            { name: 'Injection Treatment', url: 'asthetic.face.popular-face' },
            { name: 'Golden HIFU', url: 'asthetic.face.popular-face' },
            { name: 'Alpha Cooling for Body', url: 'asthetic.face.popular-face' },
            { name: 'Pico Laser Therapy', url: 'asthetic.face.popular-face' },
            { name: 'Q Switched Spectra XT Laser', url: 'asthetic.face.popular-face' },
            { name: 'V - ST RF Skin Tightening', url: 'asthetic.face.popular-face' },
            { name: 'V - IPL Treatment', url: 'asthetic.face.popular-face' },
            { name: 'V - Nd Yag Long Pulsed Laser', url: 'asthetic.face.popular-face' },
            { name: 'Diode Laser', url: 'asthetic.face.popular-face'},
            { name: 'Fractional Laser', url: 'asthetic.face.popular-face' },
            { name: 'Beauty Injection' , url: 'asthetic.face.popular-face'},
            { name: 'Co2 fractional Treatment' , url: 'asthetic.face.popular-face'},
            { name: 'Chemical Peeling', url: 'asthetic.face.popular-face' },
          ]
        },
        {
          name: 'Body',
          urls: [
            { name: 'Anti - Aging Therapy', url: 'asthetic.face.popular-face' },
            { name: 'Hair Regrowth', url: 'asthetic.face.popular-face' },
            { name: 'Fat Freezing', url: 'asthetic.face.popular-face' },
            { name: 'Body Contouring & Slimming', url: 'asthetic.face.popular-face' },
            { name: 'Body Whitening', url: 'asthetic.face.popular-face' },
            { name: 'Tattoo Removal', url: 'asthetic.face.popular-face' },
            { name: 'Stretch Marks', url: 'asthetic.face.popular-face' },
            { name: 'Skin Growth', url: 'asthetic.face.popular-face' },
            { name: 'Cosmetic Gynecology', url: 'asthetic.face.popular-face' },
            { name: 'Vaginal Rejuvenation', url: 'asthetic.face.popular-face' },

          ]
        },
        // {
        //   name: 'Skin Care',
        // }
      ]
    }
  },
  {
    name: 'Plastic Surgery',
    url: 'plastic-surgery',
    nestedDropdown: true,
    nested: {
      urls: [
        {
          name: 'Face',
          urls: [
            { name: 'Popular Treatment', url: 'asthetic.face.popular-face' },
            { name: 'Injection Treatment', url: 'asthetic.face.popular-face' },
            { name: 'Golden HIFU', url: 'asthetic.face.popular-face' },
            { name: 'Alpha Cooling for Body', url: 'asthetic.face.popular-face' },
            { name: 'Pico Laser Therapy', url: 'asthetic.face.popular-face' },
            { name: 'Q Switched Spectra XT Laser', url: 'asthetic.face.popular-face' },
            { name: 'V - ST RF Skin Tightening', url: 'asthetic.face.popular-face' },
            { name: 'V - IPL Treatment', url: 'asthetic.face.popular-face' },
            { name: 'V - Nd Yag Long Pulsed Laser', url: 'asthetic.face.popular-face' },
            { name: 'Diode Laser', url: 'asthetic.face.popular-face'},
            { name: 'Beauty Injection' , url: 'asthetic.face.popular-face'},
            { name: 'Co2 fractional Treatment' , url: 'asthetic.face.popular-face'},
            { name: 'Fractional Laser', url: 'asthetic.face.popular-face' },
            { name: 'Chemical Peeling', url: 'asthetic.face.popular-face' },
            { name: 'Vaginal Rejuvenation', url: 'asthetic.face.popular-face' },
          ]
        },
        {
          name: 'Eye',
          urls: [
            { name: 'Anti - Aging Therapy', url: 'asthetic.face.popular-face' },
            { name: 'Hair Regrowth', url: 'asthetic.face.popular-face' },
            { name: 'Fat Freezing', url: 'asthetic.face.popular-face' },
            { name: 'Body Contouring & Slimming', url: 'asthetic.face.popular-face' },
            { name: 'Body Whitening', url: 'asthetic.face.popular-face' },
            { name: 'Tattoo Removal', url: 'asthetic.face.popular-face' },
            { name: 'Stretch Marks', url: 'asthetic.face.popular-face' },
            { name: 'Skin Growth', url: 'asthetic.face.popular-face' },
            { name: 'Cosmetic Gynecology', url: 'asthetic.face.popular-face' },
          ]
        },
        {
          name: 'Ear',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        // 4· 
        // 5· 
        // 6· 
        // 7· 
        // 8· 
        // 9· 
        // 10· 
        {
          name: 'Nose',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        {
          name: 'Lips',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        {
          name: 'Chin',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        {
          name: 'Breast',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        {
          name: 'Body Contouring & Fat Removal',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        {
          name: 'Mole & Scar Removal',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
        {
          name: 'Cosmetic Gynecology',
          urls: [
            { name: 'Popular Skin Care', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 2', url: 'asthetic.face.popular-face' },
            { name: 'Popular Skin Care 3', url: 'asthetic.face.popular-face' }
          ]
        },
      ]
    }
  },
  {
    name: 'About Us', url: 'about-us', nestedDropdown: false, dropdown: {
      urls: [
        {
          name: 'Our Story',
          url: 'about-us.our-story',
        },
        {
          name: 'Our Center',
          url: 'about-us.our-center',
        },
        {
          name: 'Our Team',
          url: 'about-us.our-team',
        }
      ]
    }
  },
  { name: 'Resources', url: 'resources', nestedDropdown: false },
  { name: 'Special Offer', url: 'special-offer', nestedDropdown: false },
  { name: 'Contact Us', url: 'contact-us', nestedDropdown: false },
]

const isNavOn = ref(false)

const toggleNav = () => isNavOn.value = !isNavOn.value

// const toggleNav = () => {
//   if (isNavOn.value) {
//     closeMenu()
//   } else {
//     expandMenu()
//   }
//   isNavOn.value = !isNavOn.value
// };

// function expandMenu() {
//   gsap.timeline({ overwrite: "none" })
//     .set("#expanded-menu", { height: 0 })
//     .to("#expanded-menu", {
//       duration: 1.2,
//       height: "auto",
//       ease: "power1"
//     })
//     .to("#sub-menu", {
//       delay: 1,
//       duration: 0.3,
//       opacity: 1,
//       ease: "power1",
//     }, "-=0.3")
// }

// function closeMenu() {
//   gsap.timeline({ overwrite: "none" })
//     .to("#sub-menu", {
//       duration: 0.3,
//       opacity: 0,
//       ease: "power1.easeOut",
//     })
//     .to("#expanded-menu", {
//       delay: 0.2,
//       duration: 0.5,
//       ease: "power1.easeOut",
//       height: 0,
//     }, "-=0.3")
// }
</script>
<template>
  <nav
    class="sticky top-0 z-50 flex-no-wrap flex w-full items-center justify-between bg-[#a57c00] shadow-md shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start">
    <div class="container">
      <div id="navElementButton"
        class="transition-all duration-700 flex w-full flex-wrap px-3 items-center justify-end lg:justify-center lg:px-0 overflow-hidden">
        <button @click="toggleNav"
          class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="[&>svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
              <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
      <div id="expanded-menu" :class="{ 'h-[348px]': isNavOn }"
        class="transition-all duration-700 h-0 lg:h-auto basis-[100%] items-center lg:!flex lg:basis-auto">
        <!-- Left links -->
        <ul id="sub-menu" :class="{ 'opacity-100': isNavOn, 'opacity-0': !isNavOn }"
          class="lg:opacity-100 items-center transition-all duration-700 lg:flex space-y-4 p-3 list-style-none mx-auto flex-col lg:flex-row lg:space-y-0">
          <template v-for="url in urls">
            <template v-if="!url.nestedDropdown && !url.dropdown">
              <NavItem :url="url"></NavItem>
            </template>
            <template v-if="url.nestedDropdown">
              <NestedDropdown :url="url"></NestedDropdown>
            </template>
            <template v-if="url.dropdown">
              <Dropdown :url="url"></Dropdown>
            </template>
          </template>
        </ul>
        <!-- Left links -->
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped></style>
