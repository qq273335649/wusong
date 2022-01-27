
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="app-2">
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class About extends Vue {
  msg!: string;
}
</script>
