
<template>
  <div class="hello">
    <h1 id="h1">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
const data = { a: 1 }
const vm = new Vue({
  el: "#h1",
  data: data,
});
</script>
