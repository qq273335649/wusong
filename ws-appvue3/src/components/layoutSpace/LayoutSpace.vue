<template>
  <div class="space"><slot></slot></div>
</template>
<script>
import { Vue } from "vue-class-component";

export default class LayoutSpace extends Vue {}
</script>

<style lang="less" scoped>
.space {
  width: 1200px;
  margin: 0 auto;
}
</style>