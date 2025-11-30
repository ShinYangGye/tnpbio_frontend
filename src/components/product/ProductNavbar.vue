<script setup>
import { useProductStore } from '../../stores/productStore';
const productStore = useProductStore();

const getProductList = (mainId) => {
  productStore.state.menuMainId = mainId;
  productStore.doGetProducts(null);
};
</script>
<template>
  <div class="alert alert-light text-start p-2 mb-1" role="alert">
    <!-- {{ productStore.state.navString }} -->
    <div class="btn-group">
      <span class="btn"> {{ productStore.state.navMainMenu }} </span>
      <ul class="dropdown-menu rounded-0 p-2">
        <li v-for="(menu, index) in productStore.state.menus" :key="index">
          <span @click="getProductList(menu.id)">{{ menu.menuName }}</span>
        </li>
      </ul>
    </div>
    ▶
    <div class="btn-group">
      <span class="btn"> {{ productStore.state.navSubMenu }} </span>
      <ul class="dropdown-menu rounded-0">
        <li v-for="(sub, index) in productStore.state.menuDetail.menuSub" :key="index">
          {{ sub.menuName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.btn-group:hover > .dropdown-menu {
  display: block;
  background-color: #eee;
  position: absolute;
  top: 30px;
  left: 10px;
}
</style>
