<template>
  <div ref="value" class="pop">
    <el-popover placement="bottom-end" :width="200" trigger="hover">
      <template #reference>
        <el-avatar
          :size="36"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </template>
      <div class="my">
        <el-row align="middle" class="name">
          <el-avatar
            class="avatar"
            :size="24"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          <el-tag>harry999</el-tag>
        </el-row>
        <el-row justify="space-around" align="middle">
          <el-link @click="toMyBlog">我的博客</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link @click="toAdmin">我的后台</el-link>
        </el-row>
        <el-divider style="margin: 10px 0"></el-divider>
        <el-row justify="center">
          <el-button @click="toLogout">退出登录</el-button>
        </el-row>
      </div>
    </el-popover>
  </div>
</template>
<script lang='ts'>
import router from "@/router";
import { toPageOpen } from "@/utils";
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const value = ref();
    const store = useStore(); // 使用useStore方法
    const toLogout = () => {
      store.commit("clearToken");
      router.push("/home");
    };
    const toAdmin = () => {
      router.push("/admin");
    };
    const toMyBlog = () => {
      toPageOpen(`/blogger/${"zhangsan"}`);
    };
    return {
      value,
      toLogout,
      toAdmin,
      toMyBlog,
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
.my {
  padding: 12px 6px;
  .name {
    margin-bottom: 14px;
    .avatar {
      margin-right: 10px;
    }
  }
}
</style>,