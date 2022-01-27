<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: String,
  },
})
export default class BlogPost extends Vue {
  title!: string;
}
</script>