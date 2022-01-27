<template>
  <div class="list"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      list: [],
    };
  },
})
export default class List extends Vue {}
</script>

<style scoped lang="less">
.list {
  border: 1px solid #5e5e5e;
}
</style>