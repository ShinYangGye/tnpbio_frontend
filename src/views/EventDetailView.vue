<script setup>
import { useRoute } from 'vue-router';
import { useEventStore } from '../stores/eventStore';
const baseURL = import.meta.env.VITE_APP_API;
const eventStore = useEventStore();
const route = useRoute();
eventStore.doGetEventDetail(route.query.id);
</script>

<template>
  <div>
    <p class="h5 d-flex mt-2">
      <span style="padding-top: 0px; padding-right: 5px"
        ><i class="bi bi-square" style="font-size: 20px"></i></span
      >이벤트
    </p>
    <hr class="mb-2" />
    <div class="bg-secondary-subtle p-2">
      <div class="h4 m-1">{{ eventStore.state.itemDetail.title }}</div>
      <div class="text-end">
        <span>{{ eventStore.state.itemDetail.regAt.substring(0, 10) }}</span>
      </div>
    </div>
    <div class="m-1 wrap-text">
      {{ eventStore.state.itemDetail.contents }}
    </div>
    <div class="m-1 text-center" v-if="eventStore.state.itemDetail.imgFile">
      <img
        :src="`${baseURL}/event/files/${eventStore.state.itemDetail.imgFile.savedFileName}`"
        style="max-width: 100%"
      />
    </div>
    <div class="m-1 text-center">
      <a
        class="btn btn-sm btn-danger"
        :href="`${baseURL}/event/files/${eventStore.state.itemDetail.file.savedFileName}`"
        target="_blank"
        v-if="eventStore.state.itemDetail.file"
        >이벤트 내용 상세보기</a
      >
      <router-link
        class="btn btn-sm btn-secondary mx-1"
        :to="{ name: 'event', query: { status: 'A' } }"
        >목록</router-link
      >
    </div>
  </div>
</template>
