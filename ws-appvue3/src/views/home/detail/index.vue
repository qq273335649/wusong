<template>
  <div ref="value">文章具体内容</div>
</template>
<script lang='ts'>
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    return {
      value,
    };
  },
  props: {},
  data() {
    return {
      a: 1,
    };
  },
  components: {},
});
</script>
<style scoped lang='less'>
</style>,