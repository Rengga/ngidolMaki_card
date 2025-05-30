<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full h-full justify-center flex" :class="{ 'row-c': isActive, 'row-d': !isActive }" @click="toggleClass">
      <div v-for="(column, colIndex) in columns" :key="colIndex" :class="{ 'column-c': isActive, 'column-d': !isActive }">
        <img v-for="index in column" :key="index" :src="getImage(index)" class="lazy-img" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Toggle class
const isActive = ref(true);
const toggleClass = () => {
  isActive.value = !isActive.value;
};

// Buat daftar index gambar
const imageIndices = Array.from({ length: 19 }, (_, i) => i + 1);
const mid = Math.ceil(imageIndices.length / 2);
const columns = [imageIndices.slice(0, mid), imageIndices.slice(mid)];

// Import semua gambar dari folder
const images = import.meta.glob("../assets/por/*.webp", { eager: true });
const getImage = (index) => {
  const filename = `po (${index}).webp`;
  for (const path in images) {
    if (path.includes(filename)) {
      return images[path].default;
    }
  }
  return ""; // fallback jika tidak ditemukan
};
</script>
