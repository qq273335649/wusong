<template>
  <el-row :gutter="10">
    <el-col v-for="item in list" :key="item._id" :span="12">
      <el-card shadow="hover" :body-style="{ padding: '0px' }" class="userCard">
        <el-row align="middle">
          <el-col :span="8">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col>
          <el-col :span="16">
            <el-space direction="vertical" alignment="start">
              <span class="name" @click="toBlod(item.name)">{{
                item.name
              }}</span>
              <div class="bottom">
                <span>文章<em>1</em></span>
                <el-divider direction="vertical"></el-divider>
                <span>分类<em>2</em></span>
                <el-divider direction="vertical"></el-divider>
                <span>标签<em>3</em></span>
              </div>
              <el-button type="text" class="button"
                >相关文章：这是一篇文章内容</el-button
              >
            </el-space>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang='ts'>
import router from "@/router";
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const value = ref();
    const currentDate = ref(new Date());
    return {
      value,
      currentDate,
    };
  },
  props: {
    list: [],
  },
  data() {
    return {
      a: [],
    };
  },
  methods: {
    toBlod(name: string) {
      let routeUrl = this.$router.resolve({
        path: `/blogger/${name}`,
      });
      window.open(routeUrl.href, "_blank");
    },
  },
  components: {},
});
</script>
<style scoped lang='less'>
.userCard {
  .el-col {
    img {
      border-radius: 50%;
      width: 100px;
    }
  }
  .el-col:first-child {
    text-align: center;
    padding: 0 15px;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  .bottom {
    font-size: 14px;
    color: #6d6d6d;
    em {
      padding-left: 4px;
    }
  }
}
.el-card {
  margin-bottom: 10px;
  padding: 30px 0;
}
</style>,