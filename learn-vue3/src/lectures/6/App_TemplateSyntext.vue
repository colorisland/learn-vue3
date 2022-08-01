<template>
  <div>
    <h2>보간법</h2>
    <div>{{ message }}</div>
    <div v-once>{{ message }}</div>
    <button @click="message += '!'">Click!</button>
    <hr />
    <h2>HTML</h2>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
    <hr />
    <h2>속성 바인딩</h2>
    <div :title="dynamicTitle">마우스를 올려보세요</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled" />
    <input v-bind="attrs" />
    <h1>JavaScript</h1>
    <div>{{ message.split("").reverse().join("") }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let message = ref("안녕하세요!");
    const rawHtml = ref("<strong>안녕하세요</strong>");
    let dynamicTitle = ref("안녕하세용");
    let isInputDisabled = ref(true);
    let attrs = ref({
      type: "text",
      value: "12345678",
      disabled: false,
    });
    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
