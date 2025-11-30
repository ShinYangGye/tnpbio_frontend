<script setup>
import ProductLeftMenu from '@/components/top/ProductLeftMenu.vue';
import ProductHome from '@/components/top/ProductHome.vue';
import { useProductStore } from '../../stores/productStore';
const productStore = useProductStore();
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
      <div class="row">
        <ProductLeftMenu />
        <div class="col-sm-12 col-md-9">
          <div class="text-start">
            <strong>{{ productStore.state.navMainMenu }}</strong>
          </div>
          <div>
            <ProductHome />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
