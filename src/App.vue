<template>
  <div class="w-full h-screen">
    <Navbar />
    <div v-if="$route.path !== '/portofolio'" class="w-full h-full relative scroll-container cus-scroll" @scroll="handleScroll" ref="scrollContainer">
      <section ref="homeSection" id="homeSection" class="section">
        <Home />
      </section>
      <section ref="priceSection" id="priceSection" class="section">
        <Price />
      </section>
      <section ref="doDontSection" id="doDontSection" class="section">
        <Dodont />
      </section>
    </div>
    <router-view v-else />
    <div class="hidden md:block right-16 fixed bottom-1/2">- scroll -</div>
    <Footer />
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home.vue";
import Price from "./components/Price.vue";
import Dodont from "./components/DoDont.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const homeSection = ref(null);
const priceSection = ref(null);
const doDontSection = ref(null);

const router = useRouter();

const handleScroll = () => {
  const section1Position = homeSection.value.getBoundingClientRect().top;
  const section2Position = priceSection.value.getBoundingClientRect().top;
  const section3Position = doDontSection.value.getBoundingClientRect().top;

  // Menentukan apakah section berada dalam viewport untuk trigger AOS
  if (section1Position < window.innerHeight && section1Position > 0) {
    AOS.refresh(); // Memastikan animasi di-refresh jika section terlihat
  }
  if (section2Position < window.innerHeight && section2Position > 0) {
    AOS.refresh();
  }
  if (section3Position < window.innerHeight && section3Position > 0) {
    AOS.refresh();
  }
};

onMounted(() => {
  AOS.init({
    duration: 1000, // durasi animasi dalam milidetik
    once: false, // animasi hanya diputar sekali
    mirror: true,
    // easing: "ease-in-sine",
  });
});
</script>

<style>
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>
