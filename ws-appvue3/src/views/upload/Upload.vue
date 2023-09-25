<!--
 * @Author: your name
 * @Date: 2021-12-22 19:30:00
 * @LastEditTime: 2022-02-22 11:20:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-appvue3\src\views\home\Home.vue
-->
<template>
  <div class="home">
    <el-upload
      ref="upload"
      class="upload-demo"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :on-error="onError"
      :before-remove="beforeRemove"
      :on-remove="onRemove"
      :on-progress="onProgress"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :http-request="handleFileUpload"
      >
      <el-button size="small" type="primary">点击上传</el-button>
      <div class="el-upload__size">文件大小不能超过2MB</div>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { UploadFile } from "element-plus/es/components/upload/src/upload.type";
import { defineComponent } from "vue-demi";
import { upload, getString } from "./services";

interface fileType extends UploadFile {
  type: string;
  size: number;
  name: string;
  file: string
}
interface anyType {
  name: string;
}
export default defineComponent({
  components: {
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    beforeUpload(file: fileType){
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 200;
      if (!isJPG) {
        this.$message.error('上传文件只能是图片格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过2MB!');
      }
      return isJPG && isLt2M;
    },
    onSuccess(res:anyType) {
      this.$message.success('上传成功');
      console.log(res);
    },
    onError(error:anyType, file:fileType) {
      console.log(error, file);
      this.$message.error(`上传失败：${error}`);
    },
    beforeRemove(file:fileType, fileList:fileType[]) {
      console.log('====================================');
      console.log(file,fileList);
      console.log('====================================');
      return false
      // return this.$confirm(`确定移除 ${file.name}？`);
    },
    onRemove(file:fileType, fileList:fileType[]) {
      console.log(file, fileList);
      this.$message.warning(`${file.name}已移除`);
    },
    onProgress(event:anyType, file:fileType, fileList:fileType[]) {

      console.log(event,file, fileList);
    },
    handleExceed(files:fileType, fileList:fileType[]) {
      console.log(files,fileList);
      // this.$message.warning(`文件数量超过限制，最多只能上传 ${this.limit} 个文件`);
    },
    // 处理文件上传操作
    handleFileUpload(file:fileType) {
      // 调用后端服务器的接口
      let formData = new FormData();
      formData.append('file', file.file );
      console.log(222);
      console.log(formData.get('file'));

      getString().then((res)=>{
        console.log(res);
      })
      upload(formData).then((resp) => {
        // this.form.installImgUrl = resp.url;
        console.log(resp);
      }).catch((e:{message:string}) => {
        this.$message.error(e.message);
        // this.$refs.upload.clearFiles();
      })
    }
  }
});
</script>
<style lang="less" scoped>
.marginspace {
  margin-bottom: 20px;
}
</style>
