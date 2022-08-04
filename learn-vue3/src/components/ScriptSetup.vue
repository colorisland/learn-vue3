<template>
  <div>
    {{ msg }}
    <button @click="sayHello">Click</button>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let msg = "hello world!";
let sayHello = () => {
  alert("say hello");
};
</script>

<style lang="scss" scoped></style>
