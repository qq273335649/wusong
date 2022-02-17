<template>
  <div>
    <el-drawer
      v-model="drawer"
      title="登录"
      direction="rtl"
      :before-close="handleClose"
      size="20%"
    >
      <el-form
        label-position="top"
        label-width="100px"
        style="max-width: 460px"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="foot">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick(ruleForm)">确认登录</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
interface data {
  drawer: boolean;
}
type FormInstance = InstanceType<typeof ElForm>;
export default defineComponent({
  props: {},
  setup() {
    const formSize = ref("");
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
      name: "",
      password: "",
    });
    const validatePass = (rule: any, value: any, callback: any) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (ruleForm.password !== "") {
          if (!ruleFormRef.value) return;
          ruleFormRef.value.validateField("password", () => null);
        }
        callback();
      }
    };
    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          validator: validatePass,
          trigger: "blur",
        },
      ],
    });
    return { formSize, ruleFormRef, ruleForm, rules };
  },
  data(): data {
    return {
      drawer: false,
    };
  },
  components: {},
  methods: {
    handleShow() {
      this.drawer = true;
    },
    handleClose(done: () => void) {
      this.drawer = false;
      done();
      //   ElMessageBox.confirm("Are you sure you want to close this?")
      //     .then(() => {
      //       done();
      //       this.drawer = false;
      //     })
      //     .catch(() => {
      //       // catch error
      //     });
    },
    cancelClick() {
      this.drawer = false;
    },
    confirmClick(values: any) {
      let form: any = this.$refs.ruleFormRef;
      form?.validate(function (boolean: boolean, object: any) {
        console.log(boolean);
        console.log(object);
        console.log(values);
      });
    },
  },
});
</script>
<style scoped lang='less'>
.foot{
  flex: auto;
  display: flex;
  justify-content: center;
}
</style>