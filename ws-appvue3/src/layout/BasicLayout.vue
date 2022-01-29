<template>
  <el-container>
    <el-header>
      <LayoutSpace>
        <el-menu
          :default-active="defaultactive"
          router
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item
            v-for="(item, index) in tabs"
            :index="item.link"
            v-bind:key="index"
            >{{ item.label }}</el-menu-item
          >
        </el-menu>
      </LayoutSpace>
    </el-header>
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
import router from "@/router";
export default {
  components: {
    ...Icon,
    LayoutSpace,
  },
  data() {
    return {
      // defaultactive: "/home",
      tabs: [
        {
          label: "首页",
          link: "/home",
          icon: "calendar",
        },
        {
          label: "分类",
          link: "/sort",
          icon: "calendar",
        },
        {
          label: "标签",
          link: "/span",
          icon: "calendar",
        },
        {
          label: "归档",
          link: "/archive",
          icon: "calendar",
        },
        {
          label: "管理",
          link: "/admin",
          icon: "calendar",
        },
        {
          label: "关于",
          link: "/about",
          icon: "calendar",
        },
      ],
    };
  },
  computed: {
    defaultactive: () => router.currentRoute.value.path,
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

<style scoped lang="sass">
.common-layout

.el-footer
  background-color: #b3c0d1
  color: var(--el-text-color-primary)
  text-align: center
  line-height: 60px

  &
    line-height: 60px

.el-aside
  background-color: #d3dce6
  color: var(--el-text-color-primary)
  text-align: center
  line-height: 200px

.el-main
  background-color: #e9eef3
  color: var(--el-text-color-primary)
  text-align: center
  line-height: 160px

body > .el-container
  margin-bottom: 40px

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside
  line-height: 260px

.el-container:nth-child(7) .el-aside
  line-height: 320px

.el-menu--horizontal
  border-bottom: 0
.el-menu-item
  font-size: 16px
  &.is-active
    font-weight: bold
</style>