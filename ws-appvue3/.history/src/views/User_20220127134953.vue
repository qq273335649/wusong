<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
    return {
      msg: "消息",
    };
  },
})
export default class User extends Vue {
  msg!: String;
}
</script>

<style scoped>
</style>