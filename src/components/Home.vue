<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="relative">
      <h1 class="text-4xl md:text-6xl font-bold md:absolute z-10 h-full flex md:items-center ml-0 md:ml-[-140px] leading-snug" data-aos="zoom-in-right">
        <div class="block md:hidden w-full text-center">ngidolMaki Commission Page</div>
        <div class="hidden md:block">ngidolMaki <br />Commission Page</div>
      </h1>
      <Carousel v-bind="config" class="block md:hidden">
        <Slide v-for="(image, index) in images" :key="index">
          <img :src="image" class="w-[300px] h-[500px] object-cover border-2 border-slate-200" alt="Carousel Image" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="text-2xl hidden md:flex gap-6">
        <img src="../assets/h-3.webp" class="w-[300px] h-[500px] object-cover img-1 border-2 border-slate-200" data-aos="fade-right" />
        <img
          src="../assets/h-2.webp"
          class="w-[300px] h-[500px] object-cover img-2 border-2 border-slate-200"
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
        />
        <img src="../assets/h-1.webp" class="w-[300px] h-[500px] object-cover img-3 border-2 border-slate-200" data-aos="fade-left" />
        <img src="../assets/thumb.jpg" class="hidden opacity-0 ini-thumbnails" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const config = {
  autoplay: 1600,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  itemsToShow: 1.3,
  transition: 500,
};
const images = [
  new URL("../assets/h-3.webp", import.meta.url).href,
  new URL("../assets/h-2.webp", import.meta.url).href,
  new URL("../assets/h-1.webp", import.meta.url).href,
];
</script>

// npm install vue3-carousel
