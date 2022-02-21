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
          <el-button type="primary" @click="confirmClick(ruleForm)"
            >确认登录</el-button
          >
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, watchEffect } from "vue";
import { ElForm } from "element-plus";
import { postLogin } from "@/api/authApi";
import _ from "lodash";
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
    // 节流
    const debounceClick = _.debounce(function () {
      // ....
      console.log("节流");
    }, 2000);
    // 防抖
    const confirmClick = _.throttle(function () {
      // ....
      console.log("防抖");
    }, 2000);
    watchEffect(() => {
      /* 副作用的内容 */
      // confirmClick.cancel();
    });
    return {
      formSize,
      ruleFormRef,
      ruleForm,
      rules,
      confirmClick,
      // throttleClick,
    };
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
    // confirmClick() {
    //   console.log("防抖");
    // },
    // confirmClick(values: any) {
    //   console.log(values);
    //   _.debounce(() => {
    //     let form: any = this.$refs.ruleFormRef;
    //     form?.validate(async function (boolean: boolean, object: any) {
    //       if (boolean) {
    //         await postLogin({ ...values });
    //       } else {
    //         console.log(object);
    //       }
    //     });
    //   }, 5000)();
    // },
  },
});
</script>
<style scoped lang='less'>
.foot {
  flex: auto;
  display: flex;
  justify-content: center;
}
</style>