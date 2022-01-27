<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <BlogPost title="My journey with Vue" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BlogPost from '@/components/BlogPost.vue';

@Options({
  components: {
    BlogPost,
  },
})
export default class HelloWorld extends Vue {}
</script>
