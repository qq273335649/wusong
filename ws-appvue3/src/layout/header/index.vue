<template>
  <el-affix :offset="0">
    <el-header>
      <LayoutSpace>
        <el-row v-if="!routerPath.includes('/user')">
          <el-col :span="20">
            <el-row class="logocont" align="middle">
              <a class="logo" @click="toHome">
                <img alt="logo" src="@/assets/logo.png" />
              </a>
              <el-divider direction="vertical"></el-divider>
              <el-menu
                :default-active="routerPath"
                router
                class="el-menu-demo"
                mode="horizontal"
              >
                <el-menu-item
                  v-for="(item, index) in data.tabs"
                  :index="item.link"
                  v-bind:key="index"
                  >{{ item.label }}</el-menu-item
                >
              </el-menu>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-row class="mb-4" align="middle">
              <el-button @click="toLogin">登录</el-button>
              <el-button @click="toUser">注册</el-button>
            </el-row>
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="20" v-if="!token">
            <el-row class="logocont" align="middle">
              <div class="logo" @click="toHome">
                <img alt="logo" src="@/assets/logo.png" />
              </div>
              <el-divider direction="vertical"></el-divider>
              <div>注册</div>
            </el-row>
          </el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </LayoutSpace>
    </el-header>
  </el-affix>
  <LoginDrawer ref="logindrawerRef" />
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import LayoutSpace from "@/components/layoutSpace/LayoutSpace.vue";
import LoginDrawer from "@/layout/header/loginDrawer.vue";
import router from "@/router";
import { mapState, useStore } from "vuex";
// type headerPath = "/home" | "/user" | "/blogger" | ""; //需要展示不同header的标识
interface tabType {
  label: string;
  link: string;
  icon: string;
}
function headerState() {
  const { matched, params } = router.currentRoute.value;
  const name = params.name;
  let map = new Map();
  map.set("/home", [
    {
      label: "首页",
      link: "/home",
      icon: "calendar",
    },
    {
      label: "关于",
      link: "/home/about",
      icon: "calendar",
    },
  ]);
  map.set("/user", [
    {
      label: "注册",
      link: "#",
      icon: "calendar",
    },
  ]);
  map.set("/blogger", [
    {
      label: "首页",
      link: `/blogger/${name}`,
      icon: "calendar",
    },
    {
      label: "分类",
      link: `/blogger/${name}/sort`,
      icon: "calendar",
    },
    {
      label: "标签",
      link: `/blogger/${name}/span`,
      icon: "calendar",
    },
    {
      label: "归档",
      link: `/blogger/${name}/archive`,
      icon: "calendar",
    },
    {
      label: "管理",
      link: `/blogger/${name}/admin`,
      icon: "calendar",
    },
    {
      label: "关于",
      link: `/blogger/${name}/about`,
      icon: "calendar",
    },
  ]);
  const tabs: tabType[] = map.get(matched[0].path); //根据状态来切换
  let data = { tabs };
  return data;
}
export default defineComponent({
  setup() {
    const logindrawerRef = ref(null);
    let data = headerState();
    return {
      logindrawerRef,
      data,
    };
  },
  components: {
    LayoutSpace,
    LoginDrawer,
  },
  props: {},
  onMounted() {
    console.log(this.$refs.logindrawerRef);
  },
  computed: {
    routerPath: () => router.currentRoute.value.path,
    ...mapState({ token: "token" }),
  },
  methods: {
    toHome() {
      const { path } = router.currentRoute.value;
      if (path.includes("/home")) {
        if (path === "/home") {
          router.go(0);
        } else {
          router.push("/home");
        }
      } else {
        const a = document.createElement("a");
        a.href = "/home";
        a.target = "/home";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    },
    toUser() {
      router.push("/user");
    },
    toLogin() {
      const logindrawerRef: any = this.$refs.logindrawerRef;
      logindrawerRef.handleShow();
    },
  },
});
</script>
<style scoped lang="sass">
.el-header
  background: transparent
  background-color: #fefefef2
.el-menu-demo
  flex: auto
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