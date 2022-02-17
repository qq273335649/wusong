<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Vue" src="@/assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <el-row :gutter="12">
      <el-col :span="16">
        <el-card shadow="never" class="marginspace"> 筛选 </el-card>
        <el-row :gutter="12" class="marginspace">
          <el-col :span="12" v-for="item in posts" :key="item.id">
            <el-card shadow="never"> {{ item.name }} </el-card>
          </el-col>
        </el-row>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="marginspace"> 公告 </el-card>
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>最新</span>
              <el-button class="button" type="text"></el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>推荐</span>
              <el-button class="button" type="text"></el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "List item " + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      posts: [
        { name: "内容1", id: 1 },
        { name: "内容2", id: 2 },
        { name: "内容3", id: 3 },
        { name: "内容4", id: 4 },
        { name: "内容5", id: 5 },
        { name: "内容6", id: 6 },
        { name: "内容7", id: 7 },
        { name: "内容8", id: 8 },
        { name: "内容9", id: 9 },
        { name: "内容10", id: 10 },
      ],
    };
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.marginspace {
  margin-bottom: 20px;
}
</style>
