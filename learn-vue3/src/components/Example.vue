<template>
  <div>
    <!-- <main class="container py-4">
      <PostCreate @create-post="createPost" />
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
      <hr class="my-4" />
      <LabelInput
        :modelValue="userName"
        label="이름"
        @update:modelValue="(newValue) => (userName = newValue)"
      />
      <LabelTitle
        v-model:title="title"
        label="제목"
        @update:title="(newValue) => (title = newValue)"
      />
    </main> -->
    <hr />
    <fancy-button><span style="color: red">Click me</span></fancy-button>
    <fancy-button></fancy-button>
    <hr />
    <AppCard2>
      <!-- <template #[slotArgs]>나만의 헤더</template>
      <template #body>나만의 바디</template>
      <template #footer>나만의 푸터</template> -->
      <template #default>디폴트입니다.</template>
    </AppCard2>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import LabelInput from "./LabelInput.vue";
import FancyButton from "./FancyButton.vue";
import AppCard2 from "./AppCard2.vue";
// import AppCard from "./AppCard.vue";
// import PostCreate from "./PostCreate.vue";
// import LabelTitle from "./LabelTitle.vue";

export default {
  components: {
    LabelInput,
    FancyButton,
    AppCard2,
  },
  setup() {
    let slotArgs = ref("header");

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
    let createPost = (newPost) => {
      console.log(newPost);
      posts.push(newPost);
    };
    let userName = ref("");
    let title = ref("");
    return { obj, posts, createPost, userName, title, slotArgs };
  },
};
</script>

<style lang="scss" scoped></style>
