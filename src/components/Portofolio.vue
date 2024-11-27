<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full h-full justify-center" :class="{ 'row-c ': isActive, 'row-c': !isActive }" @click="toggleClass">
      <div :class="{ 'column-c ': isActive, 'column-d': !isActive }">
        <img src="../assets/por/po (1).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (2).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (3).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (4).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (5).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (6).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (7).webp" class="lazy-img" loading="lazy" />
      </div>
      <div :class="{ 'column-c ': isActive, 'column-d': !isActive }">
        <img src="../assets/por/po (8).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (9).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (10).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (11).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (12).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (13).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (14).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (15).webp" class="lazy-img" loading="lazy" />
        <img src="../assets/por/po (16).webp" class="lazy-img" loading="lazy" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isActive = ref(true);
const toggleClass = (show) => {
  isActive.value = !isActive.value;
};
</script>
