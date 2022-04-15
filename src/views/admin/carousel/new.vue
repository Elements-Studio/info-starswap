<template>
  <div>
    <div class="backContent">
      <div class="form">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="80px"
        >
          <el-row>
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title" placeholder="请输入" />
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="轮播图" prop="pic">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
              <div class="tip">
                请上传格式为JPG、PGN的图片，图片大小＜１Ｍ。
              </div>
            </el-form-item>
          </el-row>
          <el-row>
            <el-col :span="6" :offset="3">
              <el-button type="">取消</el-button>
              <el-button type="primary">保存</el-button></el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      ruleForm: {
        userName: '',
        psw: '',
        name: '',
        region: '',
        tel: '',
        radio: ''
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        pic: [{ required: true, message: '', trigger: 'blur' }]
      }
    }
  },
  mounted() {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 1

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过1MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-form-item__label {
  font-size: 14px;
  font-family: SourceHanSansCN, SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: right;
  color: #272c4a;
}
</style>
<style lang="scss" scoped>
.search {
  width: 100%;
  margin: 0 auto;
}
.table {
  width: 100%;
  margin: 0 auto;
}
.form {
  width: 650px;
}
.tip {
  width: 211px;
  height: 48px;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 24px;
}
</style>
