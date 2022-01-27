<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div id="blog-posts-events-demo">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        @enlarge-text="postFontSize += 0.1"
        @ensmall-text1="postFontSize -= 0.1"
        v-for="item in posts"
        :key="item.id"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BlogPost from "@/components/BlogPost.vue";
@Options({
  props: {
    msg: String,
  },
  components: {
    BlogPost,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      postFontSize: 1,
    };
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
