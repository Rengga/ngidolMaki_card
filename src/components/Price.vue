<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="relative w-full h-full flex justify-center items-center">
      <div
        class="bg-slate-200 w-full md:w-[1000px] h-[750px] md:h-[600px] flex flex-col md:flex-row p-1 md:p-4 gap-2"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <img src="../assets/p-1.png" alt="" class="w-[270px] md:w-[400px] object-contain" data-aos="fade-down" data-aos-duration="700" />
        <div class="w-full h-full flex md:justify-center flex-col" data-aos="fade-down" data-aos-duration="800">
          <div class="text-xl md:text-7xl font-bold">PRICE</div>
          <div class="comic-neue-bold">
            Draw: <br />
            1. CLOSE-UP 20$<br />
            2. HALFBODY 40$<br />
            3. FULLBODY 60$<br />
            *No background but simple background no problem
          </div>
          <div class="text-md md:text-4xl line-through comic-neue-bold">COMERCIAL USE X2 PRICE</div>
          <div class="text-md md:text-4xl text-blue-800 comic-neue-bold">COMERCIAL for NOW X1 PRICE</div>
          <div class="text-md md:text-3xl text-blue-800 comic-neue-bold">
            Payment by: <br />
            - Paypal <br />
            - For local (indonesia) use BCA. 1$ = 12K
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
</script>
