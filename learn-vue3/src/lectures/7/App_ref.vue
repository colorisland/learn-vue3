<template>
  <div>
    <p>{{ message }}</p>
    <button @click="addMessage">Cilck</button>
    <hr />
    <p>{{ message2.value }}</p>
    <button @click="addMessage2">Cilck</button>
    <hr />
    <p>{{ message3 }}</p>
    <button @click="addMessage3">Cilck</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    //그냥 reactive로 감싸면 안된다.
    let message = reactive("hello vue!");
    //message2, message3는 정상동작
    let message2 = reactive({ value: "helllooo" });
    let message3 = ref("hihihi~");
    let addMessage = () => {
      message += "!";
    };
    let addMessage2 = () => {
      message2.value += "!";
    };
    let addMessage3 = () => {
      message3.value += "!";
    };
    return {
      message,
      message2,
      message3,
      addMessage,
      addMessage2,
      addMessage3,
    };
  },
};
</script>

<style lang="scss" scoped></style>
