<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button @click="$emit('enlargeText')">Enlarge text</button>
    <button @click="$emit('ensmallText1')">Ensmall text</button>
  </div>
  <component :is="TodoItem" v-model:msg="站内撒"></component>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoItem from './TodoItem.vue';
@Options({
  props: {
    title: String,
  },
  components:{
    TodoItem
  }
})
export default class BlogPost extends Vue {
  title!: string;
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
