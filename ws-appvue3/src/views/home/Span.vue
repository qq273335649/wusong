<template>
  <!-- <div>标签</div> -->
  <el-card shadow="never">
    <el-space :size="20">
      <el-tag>Tag 1</el-tag>
      <el-tag class="ml-2" type="success">Tag 2</el-tag>
      <el-tag class="ml-2" type="info">Tag 3</el-tag>
      <el-tag class="ml-2" type="warning">Tag 4</el-tag>
      <el-tag class="ml-2" type="danger">Tag 5</el-tag>
    </el-space>
  </el-card>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Span extends Vue {}
</script>

<style lang="scss" scoped>
</style>