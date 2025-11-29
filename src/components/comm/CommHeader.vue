<script setup>
import BrandList from '@/components/brand/BrandList.vue';
</script>
<template>
  <div class="container d-none d-md-block" style="padding: 25px">
    <RouterLink class="navbar-brand" :to="{ name: 'home' }"
      ><img src="@/assets/images/tnp_logo_sm.png" style="width: 160px"
    /></RouterLink>
  </div>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
    aria-label="Tenth navbar example"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample08"
        aria-controls="navbarsExample08"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse justify-content-md-center collapse"
        id="navbarsExample08"
        style=""
      >
        <!-- <RouterLink class="navbar-brand" :to="{ name: 'home' }">TNP Bio</RouterLink> -->
        <ul class="navbar-nav">
          <li
            class="nav-item mx-3"
            onmouseover="document.getElementById('top1').style.display='none'; document.getElementById('top2').style.display='none';document.getElementById('top3').style.display='none';"
          >
            <RouterLink class="nav-link active" :to="{ name: 'home' }">메인으로</RouterLink>
          </li>
          <li
            class="nav-item mx-3"
            onmouseover="document.getElementById('top1').style.display='block'; document.getElementById('top2').style.display='none';document.getElementById('top3').style.display='none';"
            onclick="document.getElementById('top1').style.display='none';"
          >
            <RouterLink class="nav-link active" :to="{ name: 'product' }"
              >분야별 제품정보</RouterLink
            >
          </li>
          <li
            class="nav-item mx-3"
            onmouseover="document.getElementById('top1').style.display='none'; document.getElementById('top2').style.display='block';document.getElementById('top3').style.display='none';"
          >
            <span class="nav-link active" style="cursor: pointer">취급브랜드</span>
          </li>
          <li
            class="nav-item mx-3"
            onmouseover="document.getElementById('top1').style.display='none'; document.getElementById('top2').style.display='none';document.getElementById('top3').style.display='block';"
          >
            <span class="nav-link active" style="cursor: pointer">이벤트</span>
          </li>
          <li
            class="nav-item mx-3"
            onmouseover="document.getElementById('top1').style.display='none'; document.getElementById('top2').style.display='none';document.getElementById('top3').style.display='none';"
          >
            <RouterLink class="nav-link active" :to="{ name: 'price' }">견적의뢰</RouterLink>
          </li>
          <li
            class="nav-item mx-3"
            onmouseover="document.getElementById('top1').style.display='none'; document.getElementById('top2').style.display='none';document.getElementById('top3').style.display='none';"
          >
            <RouterLink class="nav-link active" :to="{ name: 'company' }">회사소개</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="top1_div justify-content-center" id="top1">
    <!-- onmouseout="document.getElementById('top1').style.display='none';" -->
    <div class="container bg-white border border-secondary">분야별제품정보 페이지 DIV 11111</div>
  </div>
  <div class="top2_div justify-content-center" id="top2">
    <div
      class="container bg-white border border-2 border-secondary"
      style="padding-bottom: 7px"
      onmouseleave="document.getElementById('top2').style.display = 'none'"
    >
      <BrandList />
    </div>
  </div>
  <div class="top3_div justify-content-center" id="top3">
    <div
      class="container bg-white border border-2 border-secondary"
      style="padding-bottom: 7px"
      onmouseleave="document.getElementById('top3').style.display = 'none'"
    >
      <p class="h5 d-flex mt-2">
        <span style="padding-top: 0px; padding-right: 5px"
          ><i class="bi bi-square" style="font-size: 20px"></i></span
        >이벤트
      </p>
      <div class="px-4">
        <p class="fs-6">
          <RouterLink class="text-decoration-none" :to="{ name: 'event', query: { status: 'A' } }"
            >- 전체</RouterLink
          >
        </p>
        <p class="fs-6">
          <RouterLink class="text-decoration-none" :to="{ name: 'event', query: { status: 'I' } }"
            >- 진행중</RouterLink
          >
        </p>
        <p class="fs-6">
          <RouterLink class="text-decoration-none" :to="{ name: 'event', query: { status: 'E' } }"
            >- 종료</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top1_div {
  z-index: 1000;
  display: none;
  position: absolute;
  width: 100%;
}
.top2_div {
  z-index: 1001;
  display: none;
  position: absolute;
  width: 100%;
}
.top3_div {
  z-index: 1002;
  display: none;
  position: absolute;
  width: 100%;
}
</style>
