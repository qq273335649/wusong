<template>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      msg: "消息",
    };
  },
})
export default class User extends Vue {}
</script>

<style scoped>
</style>