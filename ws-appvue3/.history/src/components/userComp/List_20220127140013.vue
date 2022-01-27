<template>
  <div class="list">
    <Item />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Item from "./Item.vue";
@Options({
  components: {
    Item,
  },
  data() {
    return {
      list: [
        { id: 0, name: "新闻1" },
        { id: 1, name: "新闻2" },
        { id: 2, name: "新闻3" },
      ],
    };
  },
})
export default class List extends Vue {}
</script>

<style scoped lang="less">
.list {
  border: 1px solid #5e5e5e;
}
</style>