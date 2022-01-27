<template>
  <div class="item">{{ item.name }}</div>
  {{ book }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    item: {},
  },
  inject: ["book"],
})
export default class Item extends Vue {}
</script>

<style scoped lang="less">
.item {
  border: 1px solid #5e5e5e;
}
</style>