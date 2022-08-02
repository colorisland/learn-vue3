<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  setup() {
    let x = ref(0);
    let y = ref(0);
    let obj = reactive({
      count: 0,
    });
    //깊은 감시자
    const person = reactive({
      name: "홍길동",
      age: 30,
      hobby: "운동",
      obj: {
        count: 0,
      },
    });

    // watch(
    //   () => x.value + y.value,
    //   (sum, old) => {
    //     console.log("sum: ", sum);
    //     console.log("old: ", old);
    //   }
    // );
    // watch([x, y], ([newx, newy], [oldx, oldy]) => {
    //   console.log(newx, newy);
    //   console.log(oldx, oldy);
    // });
    // watch(
    //   () => obj.count,
    //   (newv, oldv) => {
    //     console.log(newv);
    //   }
    // );
    watch(
      () => person.obj,
      (newValue) => {
        console.log("newValue: ", newValue);
      }
    );
    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>
