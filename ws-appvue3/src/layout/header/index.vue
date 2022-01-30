<template>
  <el-header>
    <LayoutSpace>
      <el-row v-if="routerPath.indexOf('/home') !== -1">
        <el-col :span="20">
          <el-menu
            :default-active="routerPath"
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
        </el-col>
        <el-col :span="4">
          <el-row class="mb-4" align="middle">
            <el-button @click="toUser">登录</el-button>
            <el-button @click="toUser">注册</el-button>
          </el-row>
        </el-col>
      </el-row>
      <el-row v-else>
        <el-col :span="20">
          <el-row class="logocont" align="middle">
            <div class="logo">
              <img alt="logo" src="@/assets/logo.png" />
            </div>
            <el-divider direction="vertical"></el-divider>
            <div>登录</div>
          </el-row>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </LayoutSpace>
  </el-header>
</template>
<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import LayoutSpace from "@/components/layoutSpace/LayoutSpace.vue";
import router from "@/router";
@Options({
  components: {
    LayoutSpace,
  },
  props: {},
  data() {
    return {
      tabs: [
        {
          label: "首页",
          link: "/home",
          icon: "calendar",
        },
        {
          label: "分类",
          link: "/home/sort",
          icon: "calendar",
        },
        {
          label: "标签",
          link: "/home/span",
          icon: "calendar",
        },
        {
          label: "归档",
          link: "/home/archive",
          icon: "calendar",
        },
        {
          label: "管理",
          link: "/home/admin",
          icon: "calendar",
        },
        {
          label: "关于",
          link: "/home/about",
          icon: "calendar",
        },
      ],
    };
  },
  computed: {
    routerPath: () => router.currentRoute.value.path,
  },
  methods: {
    toUser() {
      router.push("/user");
    },
  },
})
export default class Header extends Vue {}
</script>
<style scoped lang="sass">
.el-menu--horizontal
  border-bottom: 0
.el-menu-item
  font-size: 16px
.el-menu-item.is-active
  font-weight: bold
.mb-4
  height: 100%
.logocont
  line-height: 60px
  font-weight: bold
  color: #3d4e65
.logo
  width: 120px
  line-height: 100%
  & img
    width: 100%
</style>,