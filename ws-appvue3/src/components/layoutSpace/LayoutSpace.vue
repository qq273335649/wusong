<template>
  <div class="space"><slot></slot></div>
</template>
<script>
import { Vue } from "vue-class-component";

export default class LayoutSpace extends Vue {}
</script>

<style lang="less" scoped>
// @media screen and (max-width: 1200px) {
//   .space {
//     width: 100%;
//   }
// }
@media only screen and (min-width: 1200px) {
  .space {
    width: 1200px;
  }
}
.space {
  margin: 0 auto;
}
</style>