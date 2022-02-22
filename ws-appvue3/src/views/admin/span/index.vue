<!--
 * @Author: your name
 * @Date: 2022-02-22 16:38:33
 * @LastEditTime: 2022-02-22 17:00:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-appvue3\src\views\admin\sort\index.vue
-->
<template>
  <div ref="value">标签{{ token }}</div>
</template>
<script lang='ts'>
import { ref, defineComponent } from "vue";
import { mapState } from "vuex";
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
  computed: {
    ...mapState({ token: "token" }),
  },
  components: {},
});
</script>
<style scoped lang='less'>
</style>,