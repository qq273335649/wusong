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
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input
          type="password"
          v-model="formLabelAlign.repassword"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >确认注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance, reactive, ref } from "vue";
import { ElForm } from "element-plus";
interface dataType {
  labelPosition: { pos: string };
}
export default defineComponent({
  setup() {
    type FormInstance = InstanceType<typeof ElForm>;
    const internalInstance = getCurrentInstance();
    console.log("internalInstance", internalInstance);
    const ruleFormRef = ref<FormInstance>();
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
          console.log("submit!");
          console.log(formLabelAlign);
          internalInstance?.appContext.config.globalProperties.$http
            .post("/api/users/add", { ...formLabelAlign })
            .then((rel: any) => {
              console.log(rel);
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };
    return { rules, formLabelAlign, ruleFormRef, submitForm };
  },
  props: {},
  data(): dataType {
    return {
      labelPosition: { pos: "left" },
    };
  },
  components: {},
  methods: {
    toRegister: function (values: any) {
      this.$http.post("/api/users/add").then((rel) => {
        console.log(rel);
      });
    },
  },
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