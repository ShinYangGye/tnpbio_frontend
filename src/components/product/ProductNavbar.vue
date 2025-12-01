<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '../../stores/productStore';

const router = useRouter();
const productStore = useProductStore();

const getProductList = (mainId) => {
  productStore.state.menuMainId = mainId;
  router.push({ name: 'product-list', query: { mainId: mainId, subId: 0 } });
};

const getProductSubList = (sub) => {
  productStore.state.menuMainId = sub.menuMainId;
  router.push({ name: 'product-list', query: { mainId: sub.menuMainId, subId: sub.id } });
};
</script>
<template>
  <div class="text-start">
    <div class="btn-group">
      <span class="btn"> {{ productStore.state.navMainMenu }} </span>
      <ul class="dropdown-menu rounded-0 p-2">
        <li v-for="(menu, index) in productStore.state.menus" :key="index">
          <spa style="cursor: pointer" @click="getProductList(menu.id)">{{ menu.menuName }}</spa>
        </li>
      </ul>
    </div>

    <span v-if="productStore.state.navSubMenu !== ''"> ▶ </span>

    <div class="btn-group" v-if="productStore.state.navSubMenu !== ''">
      <span class="btn">
        <span>{{ productStore.state.navSubMenu }}</span>
      </span>
      <ul class="dropdown-menu rounded-0 p-2">
        <li v-for="(sub, index) in productStore.state.menuDetail.menuSub" :key="index">
          <spa style="cursor: pointer" @click="getProductSubList(sub)">{{ sub.menuName }} </spa>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.btn-group:hover > .dropdown-menu {
  display: block;
  background-color: #ccc;
  position: absolute;
  top: 30px;
  left: 10px;
  color: black;
}
</style>
