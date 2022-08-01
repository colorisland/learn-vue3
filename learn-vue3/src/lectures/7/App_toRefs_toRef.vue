<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup() {
    const book = reactive({
      author: "Vue Team",
      year: "2020",
      title: "Vue 3 Guide",
      description: "당신은 이 책을 지금 바로 읽습니다 ;)",
      price: "무료",
    });
    let { author, title } = toRefs(book);
    let year = toRef(book, "year");
    console.log(year.value);
    console.log(typeof author); //object
    return { author, title, book };
  },
};
</script>

<style lang="scss" scoped></style>
