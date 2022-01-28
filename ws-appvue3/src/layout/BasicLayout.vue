<template>
  <!-- <el-tabs type="card">
    <el-tab-pane v-for="item in tabs" v-bind:key="item.link">
      <template #label>
        <span>
          <el-icon v-if="item.icon">
            <component :is="item.icon"></component
          ></el-icon>
          {{ item.label }}
        </span>
      </template>
      <router-view></router-view>
    </el-tab-pane>
  </el-tabs> -->
  <el-container>
    <el-header>
      <LayoutSpace>
        <el-menu
          :default-active="defaultactive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item
            v-for="(item, index) in tabs"
            :index="index.toString()"
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
import router from "@/router";
import LayoutSpace from "@/components/layoutSpace/LayoutSpace.vue";
export default {
  components: {
    ...Icon,
    LayoutSpace,
  },
  data() {
    return {
      defaultactive: "0",
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
  methods: {
    handleSelect: function (key: string, keyPath: string[]) {
      router.push(this.tabs[Number(key)].link);
    },
  },
};
</script>

<style scoped lang="sass">
.common-layout
.el-header,
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
</style>