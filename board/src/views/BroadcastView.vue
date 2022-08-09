<template>
  <div class="container py-4">
    <h3 style="float: left">방송정보</h3>
    <div class="btn btn-outline-info" style="float: right">방송 추가</div>
  </div>

  <div class="container py-4">
    <hr />
    <div>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :line-numbers="true"
        :ltr="true"
        :pagination-options="{
          enabled: true,
          mode: 'pages',
          perPage: 10,
        }"
        :select-options="{
          enabled: true,
          selectOnCheckboxOnly: true,
          disableSelectInfo: true,
        }"
        v-on:cell-click="onRowClick"
        v-on:selected-rows-change="selectionChanged"
      />
    </div>
    <hr />
  </div>

  <div class="btn btn-outline-info" style="float: right">방송 삭제</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";
let getBroadcastInfo = () => {
  let url = "http://localhost:8080/customer/v1/broadcast";
  axios.get(url).then((response) => {
    rows.value = response.data;
  });
};
let isModalViewed = ref(false);
let rows = ref([]);
let columns = ref([
  {
    label: "catentryId",
    field: "catentryId",
    type: "number",
  },
  {
    label: "costTypeCd",
    field: "costTypeCd",
  },
  {
    label: "applyStartDate",
    field: "applyStartDate",
  },
  {
    label: "applyEndDate",
    field: "applyEndDate",
  },
  {
    label: "slPrc",
    field: "slPrc",
    type: "number",
  },
]);

let onRowClick = (params) => {
  isModalViewed.value = true;
  console.log(params.row.catentryId, isModalViewed.value);
};
let selectionChanged = () => {
  console.log("셀렉트 바뀜");
};
onMounted(() => {
  getBroadcastInfo();
});
</script>

<style scoped>
.cls {
  color: cadetblue;
}
</style>
