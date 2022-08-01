<template>
  <div>
    <h2>input value</h2>
    <input type="text" v-model="inputValue" />
    <div>{{ inputValue }}</div>
    <h2>checkbox value</h2>
    <input type="checkbox" id="checkbox" v-model="checkboxValue" />
    <h2>radio value</h2>
    <!-- 라디오박스는 name 속성이 있어야 한개만 값을 선택할 수 있다. -->
    <label for="">
      <input type="radio" name="type" value="0" v-model="radioValue" />
    </label>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let inputValue = ref("123");
    return { inputValue };
  },
};
</script>

<style lang="scss" scoped></style>
