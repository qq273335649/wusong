<template>
  <div class="register">
    <h1>注册</h1>
    <el-form
      ref="ruleFormRef"
      label-position="left"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px; margin: 0 auto"
      :rules="rules"
    >
      <el-form-item label="账号" prop="name">
        <el-input
          v-model="formLabelAlign.name"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="formLabelAlign.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input
          type="password"
          v-model="formLabelAlign.repassword"
          placeholder="请确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >确认注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import * as loginApi from "./services";
import { ElForm } from "element-plus";
interface dataType {
  labelPosition: { pos: string };
}
export default defineComponent({
  setup() {
    type FormInstance = InstanceType<typeof ElForm>;
    const ruleFormRef = ref<FormInstance>();
    let loading = ref<boolean>(false);
    const formLabelAlign = reactive({
      name: "",
      password: "",
      repassword: "",
    });
    const rules = reactive({
      name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      repassword: [{ required: true, message: "请确认密码", trigger: "blur" }],
    });
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          loading.value = true;
          loginApi.register({ ...formLabelAlign }).then((rel: any) => {
            console.log(rel);
            loading.value = false;
          }).catch((err)=>{
            console.log(err);
            loading.value = false;
          })
        } else {
          return false;
        }
      });
    };
    return { rules, formLabelAlign, loading, ruleFormRef, submitForm };
  },
  props: {},
  data(): dataType {
    return {
      labelPosition: { pos: "left" },
    };
  },
  components: {},
  methods: {},
});
</script>
<style scoped lang='less'>
.register {
  h1 {
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>,