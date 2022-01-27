
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="app-2">
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <div id="app-3">
      <p v-if="seen">现在你看到我了</p>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos" v-bind:key="todo.text">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div id="app-5">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">反转消息</button>
      <button v-on:click="clickFn">反转消息</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
      seen: false,
      todos: [
        {
          text: 1,
        },
        {
          text: 2,
        },
        {
          text: 3,
        },
      ],
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    clickFn: () => {
      console.log(this);
    },
  },
})
export default class Home extends Vue {}
</script>
