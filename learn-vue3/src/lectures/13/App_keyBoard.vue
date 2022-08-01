<template>
  <div>
    <input type="text" @keyup.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    let todos = reactive([]);
    let addTodo = (e) => {
      //if (e.key === "Ender") {
      todos.push(e.target.value);
      e.target.value = "";
      e.target.focus();
      //}
    };
    return { todos, addTodo };
  },
};
</script>

<style lang="scss" scoped></style>
