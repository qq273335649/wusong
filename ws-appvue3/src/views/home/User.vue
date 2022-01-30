<template>
  <div>{{ msg }}</div>
  <el-button type="primary" @click="addbook">记录</el-button>
  {{JSON.stringify(ajson)}}
  <List />
</template>

<script lang="ts">
import * as vue from "vue";
import { Options, Vue } from "vue-class-component";
import List from "@/components/userComp/List.vue";
import ajson from "./a.json";
@Options({
  components: {
    List,
  },
  provide() {
    return {
      book: vue.computed(() => this.book),
    };
  },
  methods: {
    addbook: function () {
      this.book += 1;
    },
  },
  data() {
    return {
      msg: "消息",
      book: 0,
      ajson: ajson,
    };
  },
})
export default class User extends Vue {}
</script>

<style scoped>
</style>