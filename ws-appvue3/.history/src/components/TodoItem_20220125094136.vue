
<template>
  <div class="hello">
    <h1 id="h1">{{ msg }}</h1>
    <ul>
      <li v-for="item in list" v-bind:key="item.key">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import * as vueclass from "vue-class-component";
const { Options } = vueclass;
import { Vue } from vue;
const app = Vue.createApp({
  data() {
    return { count: 4 };
  },
});

const vm = app.mount("#app");

console.log(vm.count); // => 4
interface initData {
  list: { key: number; text: string }[];
}
@Options({
  props: {
    msg: String,
  },
  data(): initData {
    return {
      list: [
        { key: 0, text: "一条新闻" },
        { key: 1, text: "一条新闻" },
        { key: 2, text: "一条新闻" },
        { key: 3, text: "第四条新闻" },
      ],
    };
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log("a is: " + this.msg);
  },
})
export default class TodoItem extends vueclass.Vue {
  msg!: string;
}
</script>
