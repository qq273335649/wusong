<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <BlogPost title="My journey with Vue1" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import BlogPost from '@/components/BlogPost.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
