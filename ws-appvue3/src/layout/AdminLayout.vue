<!--
 * @Author: your name
 * @Date: 2022-02-22 16:31:39
 * @LastEditTime: 2022-02-22 16:55:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-appvue3\src\layout\AdminLayout.vue
-->
<template>
  <el-container>
    <Header />
    <el-main>
      <LayoutSpace>
        <router-view></router-view>
      </LayoutSpace>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>



<script lang="ts">
import * as Icon from "@element-plus/icons-vue";
import LayoutSpace from "@/components/layoutSpace/LayoutSpace.vue";
import "./index.sass";
export default {
  components: {
    ...Icon,
    LayoutSpace,
  },
  data() {
    return {};
  },
  methods: {},
  beforeCreate() {
    console.log(
      "beforeCreate",
      "实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用"
    );
  },
  created() {
    console.log("created", "实例创建完成后被立即同步调用");
  },
  beforeMount() {
    console.log("beforeMount", "在挂载开始之前被调用");
  },
  mounted() {
    console.log("mounted", "在实例挂载完成后被调用");
  },
  beforeUpdate() {
    console.log("beforeUpdate", "在数据发生改变之前,DOM被更新之前被调用");
  },
  updated() {
    console.log(
      "updated",
      "在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用"
    );
  },
  activated() {
    console.log("activated", "被 keep-alive 缓存的组件激活时调用");
  },
  deactivated() {
    console.log("deactivated", "被 keep-alive 缓存的组件失活时调用");
  },
  beforeUnmount() {
    console.log("beforeUnmount", "在卸载组件实例之前调用");
  },
  unmounted() {
    console.log("unmounted", "卸载组件实例后调用");
  },
  errorCaptured() {
    console.log("errorCaptured", "在捕获一个来自后代组件的错误时被调用");
  },
  renderTracked() {
    console.log("renderTracked", "跟踪虚拟 DOM 重新渲染时调用");
  },
  renderTriggered() {
    console.log("renderTriggered", "当虚拟 DOM 重新渲染被触发时调用");
  },
};
</script>

<style scoped lang="less">
</style>