<template>
  <div class="container py-4 mx-0">
    <h3>기획전</h3>
    <hr />
    <div>
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
    <hr />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";
let getCircleSlideInfo = () => {
  let url = "http://localhost:8080/customer/contents/circleslide";
  axios.get(url).then((response) => {
    rows.value = response.data;
  });
};

let rows = ref([]);

let columns = ref([
  {
    label: "espotType",
    field: "espotType",
  },
  {
    label: "espotId",
    field: "espotId",
  },
  {
    label: "contentName",
    field: "contentName",
  },
  // {
  //   label: "imgUrl",
  //   field: "imgUrl",
  // },
  {
    label: "marketingText",
    field: "marketingText",
  },
  {
    label: "newYn",
    field: "newYn",
  },
  {
    label: "clickCode",
    field: "clickCode",
  },
  {
    label: "contentsId",
    field: "contentsId",
  },
  {
    label: "clickTarget",
    field: "clickTarget",
  },
  {
    label: "slotTitle",
    field: "slotTitle",
  },
]);
onMounted(() => {
  getCircleSlideInfo();
});
</script>

<style lang="scss" scoped></style>
