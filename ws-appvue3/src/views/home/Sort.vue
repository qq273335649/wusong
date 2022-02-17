<template>
  <!-- <div>分类</div> -->
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
  <el-rate v-model="value" allow-half />
</template>

<script  lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const currentDate = ref(new Date());
    const value = ref();
    interface Tree {
      label: string;
      children?: Tree[];
    }

    const handleNodeClick = (data: Tree) => {
      console.log(data);
    };
    const data: Tree[] = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ];

    const defaultProps = {
      children: "children",
      label: "label",
    };
    return {
      value,
      handleNodeClick,
      data,
      defaultProps,
      currentDate,
    };
  },
  mounted() {
    this.$http
      .get("/api/users/find")
      .then((rel) => {
        if (rel.data.code === 200) {
          this.users = rel.data.list;
        }
      })
      .catch((err) => console.log(err));
  },
  data() {
    return {
      users: [],
    };
  },
});
</script>

<style lang="less" scoped>
.el-card {
  margin-bottom: 20px;
  padding: 20px 0;
}
</style>