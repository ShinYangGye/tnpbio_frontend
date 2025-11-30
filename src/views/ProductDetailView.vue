<script setup>
import ProductNavbar from '@/components/product/ProductNavbar.vue';
import ProducDetail from '@/components/product/ProductDetail.vue';
</script>

<template>
  <div>
    <p class="h5 d-flex mt-2">
      <span style="padding-top: 0px; padding-right: 5px"
        ><i class="bi bi-square" style="font-size: 20px"></i></span
      >분야별 제품정보
    </p>
    <hr class="mb-2" />
    <div class="container text-center">
      <div>
        <ProductNavbar />
      </div>
      <div><ProducDetail /></div>
    </div>
  </div>
</template>
