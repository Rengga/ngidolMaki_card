<template>
  <h1 class="text-6xl md:text-8xl font-bold z-20 fixed left-2 top-2 md:top-12 md:left-12">
    <router-link to="/#homeSection" @click="scrollToSection($event, 'homeSection')"> <button @click="toggleB(true)" class="">NGIDOLMAKI</button> </router-link>
  </h1>
  <div class="text-end z-20 fixed right-2 top-2 md:top-12 md:right-12">
    <router-link to="/#homeSection" @click="scrollToSection($event, 'homeSection')"> <button @click="toggleB(true)" class="text-xl">Home</button> </router-link
    ><br />
    <transition name="fade">
      <div v-if="isBVisible">
        <router-link to="/#priceSection" @click="scrollToSection($event, 'priceSection')"> <button class="text-xl">Price</button><br /> </router-link>
        <router-link to="/#doDontSection" @click="scrollToSection($event, 'doDontSection')"> <button class="text-xl">Do/Dont</button><br /> </router-link>
      </div>
    </transition>

    <router-link to="/portofolio" @click="toggleB(false)" class="text-xl">Portofolio</router-link>
  </div>
</template>
<style>
/* Aturan animasi untuk masuk dan keluar */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import { watch } from "vue";

const isBVisible = ref(true);

const router = useRouter();
const route = useRoute();
// Fungsi untuk scroll ke elemen berdasarkan ID
const scrollToSection = (event, sectionId) => {
  event.preventDefault(); // Mencegah tindakan default dari link
  const element = document.getElementById(sectionId);
  if (element) {
    // Scroll ke elemen dengan ID yang diberikan
    element.scrollIntoView({
      behavior: "smooth",
      block: "start", // Mengatur agar scroll menuju bagian atas elemen
    });
  } else {
    console.log("ppp");
  }
};

const toggleB = (show) => {
  isBVisible.value = show;
};

watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/portofolio") {
      console.log("ll");
      isBVisible.value = false;
    }
  }
);
</script>
