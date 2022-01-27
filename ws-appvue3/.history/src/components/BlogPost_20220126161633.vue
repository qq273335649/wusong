<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class BlogPost extends Vue {
  title!: string;
}
</script>

<style>
</style>