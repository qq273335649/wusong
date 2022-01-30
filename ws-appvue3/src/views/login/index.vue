<template>
  <div>
    <h1>登录</h1>
    <el-form
      label-position="left"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { reactive } from "vue";
import { Options, Vue } from "vue-class-component";
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});
interface dataType {
  labelPosition: { pos: string };
  formLabelAlign: any;
}
@Options({
  props: {},
  data(): dataType {
    return {
      labelPosition: { pos: "left" },
      formLabelAlign: formLabelAlign,
    };
  },
  components: {},
})
export default class Index extends Vue {}
</script>
<style scoped lang='less'>
</style>,