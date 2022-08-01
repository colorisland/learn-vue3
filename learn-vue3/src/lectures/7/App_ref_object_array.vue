<template>
  <div></div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    //ref를 객체에서 사용
    let count = ref(0);
    let state = reactive({
      count,
    });
    count.value++;
    //console.log(count.value); //0, 1
    //console.log("state.count: ", state.count.value); //undefined, undefined
    //console.log("state.count: ", state.count); //0, 1

    //ref를 array(배열)에서 사용
    let message = ref("hello");
    let arr = reactive([message]);
    console.log("arr[0]: ", arr[0].value);

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
