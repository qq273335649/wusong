<template>
  <div class="item">{{ item.name }}</div>
  {{pro}}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    item: {},
  },
  inject: ['pro'],
})
export default class Item extends Vue {}
</script>

<style scoped lang="less">
.item {
  border: 1px solid #5e5e5e;
}
</style>