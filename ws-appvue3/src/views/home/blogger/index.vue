<template>
  <div ref="value">{{ bloggername }}</div>
</template>
<script lang='ts'>
import router from "@/router";
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    const bloggername = router.currentRoute.value.path.split("blogger/")[1];
    return {
      value,
      bloggername,
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