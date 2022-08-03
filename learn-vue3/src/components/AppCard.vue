<template>
  <div>
    <div class="card">
      <div class="card-body">
        <span class="badge bg-secondary">{{
          type === "news" ? "News" : "notice"
        }}</span>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ contents }}
        </p>
        <a class="btn" :class="isLikeClass" @click="changeLike">좋아요</a>
        <!-- <br />
        {{ obj }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    type: {
      type: String,
      default: "news",
      validator: (value) => {
        return ["news", "notice"].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      //required: true,
    },
    isLike: {
      type: Boolean,
      required: false,
    },
    //객체형은 반드시 기본값이 있어야 한다.
    obj: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["changeLike"],
  setup(props, context) {
    let isLikeClass = computed(() =>
      props.isLike ? " btn-warning" : " btn-outline-warning"
    );
    let changeLike = () => {
      context.emit("changeLike");
    };
    return { isLikeClass, changeLike };
  },
};
</script>

<style lang="scss" scoped></style>
