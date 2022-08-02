<template>
  <div>
    <main class="container py-4">
      <PostCreate />
      <hr class="my-4" />
      <div class="row g-5">
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :isLike="post.isLike"
            :type="post.type"
            :obj="obj"
            @changeLike="post.isLike = !post.isLike"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import AppCard from "./AppCard.vue";
import PostCreate from "./PostCreate.vue";
export default {
  components: {
    AppCard,
    PostCreate,
  },
  setup() {
    let obj = reactive({
      title: "제목1",
      contents: "내용1",
    });
    let posts = reactive([
      {
        id: 1,
        title: "제목1",
        contents: "내용1",
        isLike: true,
        type: "news",
      },
      {
        id: 2,
        title: "제목2",
        contents: "내용2",
        isLike: true,
        type: "news",
      },
      {
        id: 3,
        title: "제목3",
        contents: "내용3",
        isLike: true,
        type: "news",
      },
      {
        id: 4,
        title: "제목4",
        contents: "내용4",
        isLike: true,
        type: "news",
      },
      {
        id: 5,
        title: "제목5",
        contents: "내용5",
        isLike: false,
        type: "notice",
      },
    ]);
    return { obj, posts };
  },
};
</script>

<style lang="scss" scoped></style>
