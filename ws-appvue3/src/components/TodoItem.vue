
<template>
  <div class="hello">
    <h1 id="h1">{{ msg }}</h1>
    <ul>
      <li v-for="item in list" v-bind:key="item.key">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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
export default class TodoItem extends Vue {
  msg!: string;
}
</script>
