<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <!-- <h3>강의가 있습니까?</h3>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ existLecture() }}</p> -->
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { ref } from "vue";
export default {
  setup() {
    let teacher = reactive({
      name: "김채원",
      lectures: ["영상처리", "알고리즘", "vue3"],
    });

    let hasLecture = computed(() => {
      console.log("computed");
      return teacher.lectures.length > 0 ? "있음" : "없음";
    });

    let existLecture = () => {
      console.log("method");
      return teacher.lectures.length > 0 ? "있음" : "없음";
    };

    let fn = ref("박");
    let ln = ref("지원");
    let full = computed({
      get() {
        return fn.value + ln.value;
      },
      set(value) {
        [fn.value, ln.value] = value.split(" ");
      },
    });
    console.log(full.value);
    full.value = "김 채원";
    return { teacher, hasLecture, existLecture, full, fn, ln };
  },
};
</script>

<style lang="scss" scoped></style>
