
<template>
  <div class="hello">
    <h1 id="h1">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class TodoItem extends Vue {
  msg!: string;
}
</script>
