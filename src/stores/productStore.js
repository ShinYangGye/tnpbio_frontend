import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
//import router from '../router';
import {
  getMenus,
  // getMenuMain,
  // getMenuSub,
  getProductList,
  getProductDetail,
  getProductTop,
} from '../api/commUseApi';

const toast = useToast();

export const useProductStore = defineStore('product', () => {
  const state = reactive({
    // 메뉴
    menus: [],
    menuMainId: 0,
    menuSubId: 0,
    menuDetail: {
      name: '',
      info: '',
      fileName: '',
      menuSub: {},
    },
    menuSubDetail: {},
    products: [],
    productDetail: {},
    navString: '제품정보',
    navMainMenu: '',
    navSubMenu: '',
  });

  // 메뉴 목록 조회
  async function doGetMenus() {
    try {
      let res = await getMenus();

      if (res.status == 200) {
        state.menus = res.data;

        if (state.menus.length == 0) {
          return;
        }

        const menuInfo = res.data.find((item) => item.id == state.menuMainId);
        // console.log('menuInfo------------------', menuInfo);

        if (menuInfo == undefined || menuInfo == null) {
          state.menuDetail.name = res.data[0].menuName;
          state.menuDetail.info = res.data[0].menuInfo;
          state.menuDetail.fileName = res.data[0].file.savedFileName;
          state.menuDetail.menuSub = res.data[0].menuSub;
        } else {
          state.menuDetail.name = menuInfo.menuName;
          state.menuDetail.info = menuInfo.menuInfo;
          state.menuDetail.fileName = menuInfo.file.savedFileName;
          state.menuDetail.menuSub = menuInfo.menuSub;
          state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);
        }

        state.navString = state.menuDetail.name;
        state.navMainMenu = state.menuDetail.name;
      } else {
        toast.info('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      console.log(error);
    }
  }

  // 메뉴 정보 세팅
  async function doGetMenuInfo(menu) {
    try {
      state.menuDetail.name = menu.menuName;
      state.menuDetail.info = menu.menuInfo;
      state.menuDetail.fileName = menu.file.savedFileName;
      state.menuDetail.menuSub = menu.menuSub;

      state.menuMainId = menu.id;
      state.navString = state.menuDetail.name;
      // state.navMainMenu = state.menuDetail.name;
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요.');
      console.log(error);
    }
  }

  // 상품 목록 조회
  async function doGetProducts() {
    try {
      // 상품 목록 조회
      let resProduct = await getProductList(state.menuMainId, state.menuSubId);

      if (resProduct.status == 200) {
        // 상품목록 데이타 세팅
        state.products = resProduct.data;

        // 메뉴정보 조회
        let resMenu = await getMenus();
        const menuInfo = resMenu.data.find((item) => item.id == state.menuMainId);

        state.menuDetail.name = menuInfo.menuName;
        state.menuDetail.info = menuInfo.menuInfo;
        state.menuDetail.fileName = menuInfo.file.savedFileName;
        state.menuDetail.menuSub = menuInfo.menuSub;
        state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);

        // 상단 네비게이션
        state.navMainMenu = menuInfo.menuName;

        if (state.menuSubId == 0) {
          state.menuSubDetail = {};
          state.navSubMenu = '';
        } else {
          state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);
          state.navSubMenu = state.menuSubDetail.menuName;
        }
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요1');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요2');
      console.log(error);
    }
  }

  // 상품 상세 조회
  async function doGetProductDetail(id) {
    try {
      // 상품정보 조회
      let resProduct = await getProductDetail(id);

      if (resProduct.status == 200) {
        // 상품정보 세팅
        state.productDetail = resProduct.data;

        // 메뉴정보 조회
        state.menuMainId = resProduct.data.menuMainId;
        state.menuSubId = resProduct.data.menuSubId;
        let resMenu = await getMenus();
        const menuInfo = resMenu.data.find((item) => item.id == state.menuMainId);
        state.menuSubDetail = menuInfo.menuSub.find((item) => item.id == state.menuSubId);

        // 상단 네비게이션
        state.navMainMenu = menuInfo.menuName;
        state.navSubMenu = state.menuSubDetail.menuName;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  // 상품 상위 4개 조회
  async function doGetProdutTop() {
    try {
      let res = await getProductTop();

      if (res.status == 200) {
        state.products = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요1');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요2');
      console.log(error);
    }
  }

  return { state, doGetMenus, doGetMenuInfo, doGetProducts, doGetProductDetail, doGetProdutTop };
});
