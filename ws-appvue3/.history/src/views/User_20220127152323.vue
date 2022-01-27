<template>
  <div>{{ msg }}</div>
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
    pro: 333,
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