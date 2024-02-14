<template>
  <div class="overflow-hidden">
    <Transition name="slide" mode="out-in">
      <slot>
    </slot>
  </Transition>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-20%);
}


.slide-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>