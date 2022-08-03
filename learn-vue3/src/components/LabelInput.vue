<template>
  <label>
    {{ label }}
    <!-- <input v-model="value" type="text" /> -->
    <input
      v-model="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
      type="text"
    />
  </label>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
