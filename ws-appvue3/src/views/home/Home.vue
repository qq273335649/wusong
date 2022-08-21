<!--
 * @Author: your name
 * @Date: 2021-12-22 19:30:00
 * @LastEditTime: 2022-02-22 11:20:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-appvue3\src\views\home\Home.vue
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <img alt="Vue" src="@/assets/logo.png" /> -->
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card shadow="never" class="marginspace"> 筛选 </el-card>
        <UserCardList :list="users" />
        <!-- <el-row :gutter="12" class="marginspace">
          <el-col :span="12" v-for="item in posts" :key="item.id">
            <el-card shadow="never"> {{ item.name }} </el-card>
          </el-col>
        </el-row> -->
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-col>
      <el-col :span="6">
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
import { usersFind } from "@/api/usersApi";
import { defineComponent } from "vue-demi";
import UserCardList from "./components/UserCardList.vue";

export default defineComponent({
  components: {
    UserCardList,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    usersFind()
      .then((rel) => {
        if (rel.data.code === 200) {
          this.users = rel.data.list;
        }
      })
      .catch((err) => console.log(err));
  },
});
</script>
<style lang="less" scoped>
.marginspace {
  margin-bottom: 20px;
}
</style>
