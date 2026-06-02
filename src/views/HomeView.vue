<script setup>
import { useProductStore } from '../stores/productStore';
// import { useEventStore } from '../stores/eventStore';
const baseURL = import.meta.env.VITE_APP_API;
const productStore = useProductStore();
// const eventStore = useEventStore();

// productStore.doGetProdutTop();
// eventStore.doGetEventTop();

let categoryName = '';
// productStore.doGetProdutMain('A');

const getProductMain = (code) => {
  if (code == 'A') {
    categoryName = '신제품';
    productStore.doGetProdutMain(code);
  } else if (code == 'B') {
    categoryName = '기초장비';
    productStore.doGetProdutMain(code);
  } else if (code == 'C') {
    categoryName = 'BioScience';
    productStore.doGetProdutMain(code);
  } else if (code == 'D') {
    categoryName = 'Genomics';
    productStore.doGetProdutMain(code);
  } else if (code == 'E') {
    categoryName = 'Cellomics';
    productStore.doGetProdutMain(code);
  }
};
</script>

<template>
  <div>
    <div class="row container p-0 m-0">
      <div class="col p-0">
        <div class="d-grid gap-0">
          <button
            class="btn btn-secondary border-end rounded-0"
            type="button"
            @mouseenter="getProductMain('A')"
          >
            <nobr>
              <img
                src="@/assets/images/btn_bg_01.gif"
                width="30px;"
                height="30px;"
                style="margin-right: 10px"
              />신제품
            </nobr>
          </button>
        </div>
      </div>
      <div class="col p-0">
        <div class="d-grid gap-0">
          <button
            class="btn btn-secondary border-end rounded-0"
            type="button"
            @mouseenter="getProductMain('B')"
          >
            <nobr>
              <img
                src="@/assets/images/btn_bg_02.gif"
                width="30px;"
                height="30px;"
                style="margin-right: 10px"
              />기초장비
            </nobr>
          </button>
        </div>
      </div>
      <div class="col p-0">
        <div class="d-grid gap-0">
          <button
            class="btn btn-secondary border-end rounded-0"
            type="button"
            @mouseenter="getProductMain('C')"
          >
            <nobr>
              <img
                src="@/assets/images/btn_bg_03.gif"
                width="30px;"
                height="30px;"
                style="margin-right: 10px"
              />BioScience
            </nobr>
          </button>
        </div>
      </div>
      <div class="col p-0">
        <div class="d-grid gap-0">
          <button
            class="btn btn-secondary border-end rounded-0"
            type="button"
            @mouseenter="getProductMain('D')"
          >
            <nobr>
              <img
                src="@/assets/images/btn_bg_04.gif"
                width="30px;"
                height="30px;"
                style="margin-right: 10px"
              />Genomics
            </nobr>
          </button>
        </div>
      </div>
      <div class="col p-0">
        <div class="d-grid gap-0">
          <button
            class="btn btn-secondary rounded-0"
            type="button"
            @mouseenter="getProductMain('E')"
          >
            <nobr>
              <img
                src="@/assets/images/btn_bg_05.gif"
                width="30px;"
                height="30px;"
                style="margin-right: 10px"
              />Cellomics
            </nobr>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div v-show="categoryName !== ''">
        <p class="h5 d-flex mt-2">
          <span style="padding-top: 0px; padding-right: 5px"
            ><i class="bi bi-square" style="font-size: 20px"></i></span
          >{{ categoryName }}
        </p>
        <hr class="mb-2" />
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-2">
        <div class="col" v-for="(prd, index) in productStore.state.products" :key="index">
          <div class="card h-100">
            <div v-for="(file, i) in prd.files" :key="i">
              <div v-if="file.kind == 'main'">
                <img
                  class="card-img-top"
                  :src="`${baseURL}/product/image/${file.savedFileName}`"
                  style="height: 200px"
                />
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title text-truncate">{{ prd.productName }}</h5>
              <p class="card-text text-truncate">
                {{ prd.productBrand }}
              </p>
            </div>

            <div class="card-footer text-end p-1">
              <small class="text-body-secondary"
                ><RouterLink
                  class="btn btn-sm btn-outline-secondary"
                  :to="{
                    name: 'product-detail',
                    query: { id: prd.id },
                  }"
                >
                  상세보기
                </RouterLink></small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-play {
  background-image: url(@/assets/images/btn_bg_01.gif);
  background-size: cover;
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  margin-top: 5px;
}

.btn-secondary {
  background-color: #9f9f9a;
}

.btn-secondary:hover {
  background-color: #333;
}
</style>
