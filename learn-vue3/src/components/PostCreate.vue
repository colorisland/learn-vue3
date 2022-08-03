<template>
  <div class="row g-3">
    <div class="col col-2">
      <select
        v-model="type"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="news">News</option>
        <option value="notice">Notice</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  emits: {
    createPost: (newPost) => {
      if (!newPost.title || !newPost.type) {
        return false;
      }
      return true;
    },
  },
  setup(props, { emit }) {
    let title = ref("");
    let type = ref("news");
    let createPost = () => {
      let newPost = {
        type: type.value,
        title: title.value,
      };
      emit("createPost", newPost);
      type.value = "news";
      title.value = "";
    };
    return { type, createPost, title };
  },
};
</script>

<style lang="scss" scoped></style>
