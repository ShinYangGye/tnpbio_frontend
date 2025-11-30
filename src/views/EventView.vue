<script setup>
import { onMounted } from 'vue';
import { useEventStore } from '../stores/eventStore';
import { useRoute } from 'vue-router';
document.getElementById('top1').style.display = 'none';
document.getElementById('top2').style.display = 'none';
document.getElementById('top3').style.display = 'none';
const baseURL = import.meta.env.VITE_APP_API;
const eventStore = useEventStore();
eventStore.doGetEvents();

const route = useRoute();
const status = route.query.status;

onMounted(() => {
  if (status == 'A') {
    document.getElementById('nav-all-tab').classList.add('active');
    document.getElementById('nav-all').classList.add('active', 'show');
  } else if (status == 'I') {
    document.getElementById('nav-ing-tab').classList.add('active');
    document.getElementById('nav-ing').classList.add('active', 'show');
  } else if (status == 'E') {
    document.getElementById('nav-end-tab').classList.add('active');
    document.getElementById('nav-end').classList.add('active', 'show');
  }
});
</script>

<template>
  <div>
    <p class="h5 d-flex mt-2">
      <span style="padding-top: 0px; padding-right: 5px"
        ><i class="bi bi-square" style="font-size: 20px"></i></span
      >이벤트
    </p>
    <hr class="mb-2" />
    <div class="text-center h4" v-if="eventStore.state.items.length == 0">
      진행중인 이벤트가 없습니다.
    </div>

    <!-- 이벤트 탭 -->
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link w-25"
          id="nav-all-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-all"
          type="button"
          role="tab"
          aria-controls="nav-all"
          aria-selected="true"
        >
          전체
        </button>
        <button
          class="nav-link w-25"
          id="nav-ing-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-ing"
          type="button"
          role="tab"
          aria-controls="nav-ing"
          aria-selected="false"
        >
          진행중
        </button>
        <button
          class="nav-link w-25"
          id="nav-end-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-end"
          type="button"
          role="tab"
          aria-controls="nav-end"
          aria-selected="false"
        >
          종료
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade"
        id="nav-all"
        role="tabpanel"
        aria-labelledby="nav-all-tab"
        tabindex="0"
      >
        <table class="table">
          <tbody>
            <tr v-for="(item, index) in eventStore.state.items" :key="index">
              <td class="align-middle" width="120">
                <div v-if="item.listImgFile">
                  <RouterLink
                    :to="{
                      name: 'event-detail',
                      query: { id: item.id },
                    }"
                    class="text-decoration-none"
                  >
                    <img
                      :src="`${baseURL}/event/files/${item.listImgFile.savedFileName}`"
                      style="width: 100px; height: 100px"
                    />
                  </RouterLink>
                </div>
              </td>
              <td>
                <RouterLink
                  :to="{
                    name: 'event-detail',
                    query: { id: item.id },
                  }"
                  class="text-decoration-none"
                >
                  <strong>{{ item.title }}</strong> <br />
                  <span>{{ item.summary }}</span> <br />
                  <span>{{ item.regAt.substring(0, 10) }}</span>
                </RouterLink>
              </td>
              <td class="align-middle" width="80">
                <span class="badge text-bg-danger" style="width: 60px" v-if="item.status == 'I'"
                  >진행중</span
                >
                <span class="badge text-bg-secondary" style="width: 60px" v-if="item.status == 'E'"
                  >종료</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="nav-ing"
        role="tabpanel"
        aria-labelledby="nav-ing-tab"
        tabindex="0"
      >
        <table class="table">
          <tbody>
            <tr
              v-for="(item, index) in eventStore.state.items.filter((item) => item.status === 'I')"
              :key="index"
            >
              <td class="align-middle" width="120">
                <div class="accordion-body text-center" v-if="item.listImgFile">
                  <RouterLink
                    :to="{
                      name: 'event-detail',
                      query: { id: item.id },
                    }"
                    class="text-decoration-none"
                  >
                    <img
                      :src="`${baseURL}/event/files/${item.listImgFile.savedFileName}`"
                      style="width: 100px; height: 100px"
                    />
                  </RouterLink>
                </div>
              </td>
              <td>
                <RouterLink
                  :to="{
                    name: 'event-detail',
                    query: { id: item.id },
                  }"
                  class="text-decoration-none"
                >
                  <strong>{{ item.title }}</strong> <br />
                  <span>{{ item.summary }}</span> <br />
                  <span>{{ item.regAt.substring(0, 10) }}</span>
                </RouterLink>
              </td>
              <td class="align-middle" width="80">
                <span class="badge text-bg-danger" style="width: 60px">진행중</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="nav-end"
        role="tabpanel"
        aria-labelledby="nav-end-tab"
        tabindex="0"
      >
        <table class="table">
          <tbody>
            <tr
              v-for="(item, index) in eventStore.state.items.filter((item) => item.status === 'E')"
              :key="index"
            >
              <td class="align-middle" width="120">
                <div class="accordion-body text-center" v-if="item.listImgFile">
                  <RouterLink
                    :to="{
                      name: 'event-detail',
                      query: { id: item.id },
                    }"
                    class="text-decoration-none"
                  >
                    <img
                      :src="`${baseURL}/event/files/${item.listImgFile.savedFileName}`"
                      style="width: 100px; height: 100px"
                    />
                  </RouterLink>
                </div>
              </td>
              <td>
                <RouterLink
                  :to="{
                    name: 'event-detail',
                    query: { id: item.id },
                  }"
                  class="text-decoration-none"
                >
                  <strong>{{ item.title }}</strong> <br />
                  <span>{{ item.summary }}</span> <br />
                  <span>{{ item.regAt.substring(0, 10) }}</span>
                </RouterLink>
              </td>
              <td class="align-middle" width="80">
                <span class="badge text-bg-secondary" style="width: 60px">종료</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- // 이벤트 탭 -->
    <!--
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item" v-for="(item, index) in eventStore.state.items" :key="index">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#flush-collapseOne-${index}`"
            aria-expanded="false"
            :aria-controls="`flush-collapseOne-${index}`"
            style="border-bottom: 1px solid gray"
          >
            <i class="bi bi-asterisk" style="margin-right: 5px"></i>
            <strong>{{ item.title }}</strong>
          </button>
        </h2>
        <div
          :id="`flush-collapseOne-${index}`"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body wrap-text">
            {{ item.contents }}
          </div>

          <div class="accordion-body" v-if="item.file">
            <a :href="`${baseURL}/event/attach/${item.id}`" target="_blank"
              >{{ item.file.orgFileName }}
              <span class="badge text-bg-secondary">이벤트 파일 다운로드</span></a
            >
          </div>

          <div class="accordion-body text-center" v-if="item.imgFile">
            <img
              :src="`${baseURL}/event/files/${item.imgFile.savedFileName}`"
              style="max-width: 100%"
            />
          </div>
          <div class="accordion-body text-center" v-if="item.file">
            <a
              class="btn btn-sm btn-danger"
              :href="`${baseURL}/event/files/${item.file.savedFileName}`"
              target="_blank"
              >이벤트 내용 상세보기</a
            >
          </div>
        </div>
      </div>
    </div>
     -->
  </div>
</template>

<style scoped>
.text-decoration-none {
  color: black;
}
.text-decoration-none:hover {
  color: blue;
}

.nav-link {
  background-color: #eee;
  color: #999;
}
</style>
