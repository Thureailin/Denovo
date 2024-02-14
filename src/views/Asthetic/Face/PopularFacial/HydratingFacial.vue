<template>
  <div class="container">
    <div class="border p-5 shadow-sm my-12">
      <h1 class="cus-heading text-cus-primary mb-3 uppercase lg:mb-8">
        HYDRATING FACIAL
      </h1>
      <p class="leading-6 lg:leading-loose">
        HydraFacial uses patented technology combined with nourishing ingredients to create an instantly gratifying glow
        on any skin type. Endorsed by celebrities who use HydraFacials for a quick pick-me-up and a photo-ready glow, see
        immediate results after one treatment.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="my-12 mx-auto border shadow-sm px-12 py-6">
      <h1 class="cus-heading !font-secondary text-center mb-3 uppercase lg:mb-16">TREATMENT OVERVIEW</h1>

      <div class="grid grid-cols-3 gap-20">
        <TreatmentOverviewCard v-for="treatment in data.treatment" :payload="treatment">
          <template  #icon>
            <!-- <CurrencyDollarIcon class="w-14 h-14 text-cus-secondary" /> -->
            <component class="w-14 h-14 text-cus-primary font-bold" :is="treatment.icon.component"></component>
          </template>
        </TreatmentOverviewCard>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="border p-5">
      <div class="lg:mb-12">
        <h1 class="cus-heading !font-secondary text-cus-primary mb-3 uppercase lg:mb-8">
          BENEFITS OF A HYDRATING FACIAL
        </h1>
        <p class="leading-6 lg:leading-loose">
          Another reason to love this facial especially if your skin doesn't react well with facials in generalis this one
          is suitable for all skin types (even the sensitive ones!)
        </p>
      </div>

      <h1 class="cus-subheading !font-secondary text-cus-primary mb-3 lg:mb-8">Here's 5 benefits of a hydrating facial
        your face will love</h1>

      <div>
        <ul class="[&>li:not(:last-child)]:mb-6">
          <li>
            #1: Hydration = Less Irritation moisture is locked in with this facial and allows the skin to heal and repair
            over time. Say "buh-bye" dry, flaky, irritated skin.
          </li>
          <li>
            #2: Improved Skin Tone & Texture exfoliation does its job without stripping your face of necessary moisture
            and oil. With dead skin cells gone, your skin tone and texture reveal a smooth, even surface. Hello, mirror!
          </li>
          <li>
            #3: Bright & Supple Complexion that hydrating serum works its magic and aids in moisture retention, balance,
            and circulation. This gives way to skin that's full and bright.Ready for your little black dress moment.
          </li>
          <li>
            #4: Decreased Oil (in excess) & Breakouts too much oil and you're prone to breakouts. Too little oil and your
            face is begging for moisture. This Hydrating Facial balances and regulates oil production on your face, so you
            feel more like you're treating your face than servicing your car.
          </li>
          <li>
            #5: Enhanced Skin Care Product Absorption
            because your skin has been cleansed, toned, exfoliated and protected with this facial, the absorption of skin
            care products on your face will be easier to penetrate the skin. Better absorption means your skin care
            products have a better chance of working and supporting your skin. Can you say cha-ching?
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="border p-5 pb-12 shadow-sm my-12 px-12 mx-auto">
      <h1 class="cus-heading !font-secondary text-center mb-3 uppercase lg:mb-16">Before & After</h1>

      <div class="grid grid-cols-2 gap-20">
        <div class="grid grid-cols-2 gap-3 relative">
          <div
            class="p-2 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 shadow rounded-full bg-cus-primary border-4 border-white">
            <ArrowsRightLeftIcon class="w-12 h-12 text-white" />
          </div>
          <div class="relative">
            <div class="absolute w-full bg-pink-200 -left-[10%] -top-[10%] h-[300px] z-0"></div>
            <div class="relative bg-[url('@/assets/img/asthetic/face1.png')] bg-cover h-[300px] shadow">
            </div>
          </div>
          <div class="relative">
            <div class="absolute w-full bg-pink-200 -right-[10%] -bottom-[10%] h-[300px] z-0"></div>
            <div class="relative bg-[url('@/assets/img/asthetic/face1.png')] bg-cover h-[300px] shadow -scale-x-100">
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 relative">
          <div
            class="p-2 absolute z-10 left-1/2 bottom-1/2 shadow -translate-x-1/2 rounded-full bg-cus-primary border-4 border-white">
            <ArrowsRightLeftIcon class="w-12 h-12 text-white" />
          </div>
          <div class="relative">
            <div class="absolute w-full bg-pink-200 -left-[10%] -top-[10%] h-[300px] z-0"></div>
            <div class="relative bg-[url('@/assets/img/asthetic/face2.png')] bg-cover h-[300px] shadow">
            </div>
          </div>
          <div class="relative">
            <div class="absolute w-full bg-pink-200 -right-[10%] -bottom-[10%] h-[300px] z-0"></div>
            <div class="relative bg-[url('@/assets/img/asthetic/face2.png')] bg-cover h-[300px] shadow -scale-x-100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="border p-5 shadow-sm my-12">
      <h1 class="cus-heading !font-secondary text-left mb-3 uppercase lg:mb-8">FREQUENTLY ASKED QUESTION</h1>

      <div>
        <Accordion v-for="(acc, index) in data.accordion" :payload="{ id: 'collapse' + index, ...acc }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TreatmentOverviewCard from '@/components/Asthetic/TreatmentOverviewCard.vue'
import { CurrencyDollarIcon, ArrowsRightLeftIcon, HeartIcon, ClockIcon } from '@heroicons/vue/24/solid'
import Accordion from '@/components/common/Accordion.vue';

const data = {
  treatment: [
    {
      title: 'condition',
      status: '$ 20',
      icon: {
        component: CurrencyDollarIcon,
      }
    },
    {
      title: 'Procedure time',
      status: 'Approx 60 minutes',
      icon: {
        component: HeartIcon,
      }
    },
    {
      title: 'Treatable areas',
      status: 'Immediate',
      icon: {
        component: ClockIcon,
      }
    },
    {
      title: 'Downtime',
      status: 'Immediate',
      icon: {
        component: ClockIcon,
      }
    },
    // {
    //   title: 'Prices',
    //   status: '$ 300',
    //   icon: {
    //     component: CurrencyDollarIcon,
    //   }
    // },
  ],
  accordion: [
    {
      button: 'one',
      content: {
        header: 'heading one',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non autem impedit, nam vitae eos repellat assumenda nesciunt omnis sint laboriosam veritatis quibusdam ea neque, expedita sed aperiam, esse optio?'
      }
    },
    {
      button: 'two',
      content: {
        header: 'heading two',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non autem impedit, nam vitae eos repellat assumenda nesciunt omnis sint laboriosam veritatis quibusdam ea neque, expedita sed aperiam, esse optio?'
      }
    },
  ]
}

</script>

<style lang="scss" scoped></style>