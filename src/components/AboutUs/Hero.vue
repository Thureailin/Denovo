<template>
  <section>
    <div id="AboutUsHero" class="relative">
      <div
      ref="hero"
        class="relative bg-[url('@/assets/img/about-us/team.png')] min-h-[600px] w-100 bg-[length:100%_100%]"
      >
        <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <h3
            ref="title"
            class="text-3xl border-2 whitespace-nowrap capitalize text-white bg-cus-primary p-3 border-gray-300 bg-opacity-70"
          >
            {{ props.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const props = defineProps(["title"]);

const title = ref(null);
const hero = ref(null);

const triggerAnimation = () => {
  let t0 = gsap.timeline({ delay: 0.6 });
  let t1 = gsap.timeline({ delay: 1.2 });

  t0.fromTo(
    hero.value,
    {
      y: '-50%',
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
    }
  );

  t1.fromTo(
    title.value,
    {
      opacity: 0,
      width: 0,
    },
    {
      opacity: 1,
      width: "100%",
      duration: 0.6,
    }
  );
};

onMounted(() => {
  triggerAnimation();
});
</script>

<style lang="scss" scoped></style>
