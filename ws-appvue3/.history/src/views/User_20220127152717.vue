<template>
  <div>{{ msg }}</div>
  <button @click="book">记录</button>
  <List />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import List from "@/components/userComp/List.vue";
@Options({
  components: {
    List,
  },
  provide: {
    pro: "pro",
  },
  methods: {
    book: function () {},
  },
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