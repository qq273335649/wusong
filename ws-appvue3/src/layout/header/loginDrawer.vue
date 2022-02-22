<template>
  <div>
    <el-drawer
      v-model="drawer"
      title="登录"
      direction="rtl"
      :before-close="handleClose"
      size="20%"
    >
      <div>{{ token }}</div>
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
          <el-button
            type="primary"
            :loading="loginloading"
            @click="
              setLoading(true);
              confirmClick(ruleForm);
            "
            >确认登录</el-button
          >
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  onUnmounted,
} from "vue";
import { ElForm } from "element-plus";
import { postLogin } from "@/api/authApi";
import { setToken } from "@/utils";
import _ from "lodash";
import { mapState, useStore } from "vuex";
import router from "@/router";
interface data {
  drawer: boolean;
  loginloading: boolean;
}
type FormInstance = InstanceType<typeof ElForm>;
export default defineComponent({
  props: {},
  setup() {
    const store = useStore();
    const formSize = ref("");
    const Instance: any = getCurrentInstance();
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({
      name: "zhangsan",
      password: "123456",
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
    // 防抖
    const confirmClick = _.debounce(function (values: any) {
      // ....
      console.log("防抖");
      ruleFormRef.value?.validate(async (boolean, object) => {
        if (boolean) {
          const res = await postLogin({ ...values });
          let user = res.data.user;
          if (user) {
            setToken(user.token);
            store.commit("incToken", user.token);
            Instance.proxy.cancelClick();
          }
        } else {
          console.log(object);
        }
        Instance.proxy.setLoading(false);
      });
    }, 2000);
    // 节流
    const throttleClick = _.throttle(function () {
      // ....
      console.log("节流");
    }, 2000);
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
      loginloading: false,
    };
  },
  computed: {
    ...mapState({
      token: "token",
    }),
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
    setLoading(bol: boolean) {
      this.loginloading = bol;
    },
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