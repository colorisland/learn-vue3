<template>
  <div>
    <h2>input value</h2>
    <input type="text" v-model="inputValue" />
    <div>{{ inputValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="yes"
      false-value="no"
    />

    <h3>checkbox values</h3>
    <label for="">
      <input type="checkbox" value="html" v-model="checkboxValues" /> html
    </label>
    <label for="">
      <input type="checkbox" value="css" v-model="checkboxValues" />css
    </label>
    <label for="">
      <input type="checkbox" value="Java" v-model="checkboxValues" />Java
    </label>
    <div>{{ checkboxValues }}</div>

    <h2>radio value</h2>
    <!-- 라디오박스는 name 속성이 있어야 한개만 값을 선택할 수 있다. -->
    <label>
      <input type="radio" name="type" value="A" v-model="radioValue" />
      A형
    </label>
    <label>
      <input type="radio" name="type" value="0" v-model="radioValue" />
      0형
    </label>
    <div>{{ radioValue }}</div>

    <div>selectValue</div>
    <select v-model="selectValue">
      <option value="html">html수업</option>
      <option value="css">css수업</option>
      <option value="Java">Java수업</option>
    </select>
    <div>{{ selectValue }}</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let inputValue = ref("");
    let checkboxValue = ref("yes");
    let radioValue = ref("");
    let selectValue = ref("html");
    let checkboxValues = ref([]);
    return {
      inputValue,
      checkboxValue,
      radioValue,
      selectValue,
      checkboxValues,
    };
  },
};
</script>

<style lang="scss" scoped></style>
