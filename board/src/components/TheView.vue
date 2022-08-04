<template>
  <div class="container py-4">
    <h3>편성표</h3>
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

let columns = ref([]);

let getInfo = () => {
  let url = "http://localhost:8080/customer/v1/info/108787351";
  axios.get(url).then((response) => {
    console.log(response);
  });
};
</script>

<style lang="scss" scoped></style>
