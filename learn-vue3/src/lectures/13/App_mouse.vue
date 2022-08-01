<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV area
        <p @click="clickP">
          P area
          <span @click.stop="clickSpan">SPAN area</span>
        </p>
      </div>
      <a href="https://naver.com" @click.prevent="clickA"> a area</a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let clickDiv = () => {
      console.log("clickDiv");
      location.href = "https://naver.com";
    };
    let clickP = () => {
      console.log("clickP");
    };
    let clickSpan = () => {
      console.log("clickSpan");
      alert("좋아요");
    };
    let clickA = () => {
      alert("어떤기능");
    };
    return {
      clickDiv,
      clickP,
      clickSpan,
      clickA,
    };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}
#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
