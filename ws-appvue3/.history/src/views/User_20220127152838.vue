<template>
  <div>{{ msg }}</div>
  <button @click="addbook">记录</button>
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
    addbook: function () {console.log(1);},
  },
  data() {
    return {
      msg: "消息",
      book: 0,
    };
  },
})
export default class User extends Vue {}
</script>

<style scoped>
</style>