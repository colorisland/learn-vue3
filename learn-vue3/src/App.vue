<template>
  <div>
    <div>
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
    <button @click="subscribers++">Subs++</button>
    <button @click="views++">views++</button>
    <button @click="likes++">likes++</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let subscribers = ref(4000);
    let views = ref(400);
    let likes = ref(20);
    return { subscribers, views, likes };
  },
};
</script>

<style lang="scss" scoped></style>
