<template>
  <div class="container py-4">
    <h3>기획전</h3>
    <hr />
    <div>
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
    <hr />
    <button class="btn btn-info" @click="getInfo">Axios Click</button>
    <div></div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";
let rows = ref([]);

let columns = ref([
  {
    label: "clickCode",
    field: "clickCode",
  },
]);

let getInfo = () => {
  let url = "http://localhost:8080/customer/contents/circleslide";
  axios.get(url).then((response) => {
    console.log(response);
  });
};
</script>

<style lang="scss" scoped></style>
