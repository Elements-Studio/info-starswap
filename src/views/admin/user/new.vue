<template>
  <div>
    <div class="backContent">
      <div>新建</div>
      <div class="form">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="80px"
        >
          <el-col>
            <el-row>
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="ruleForm.userName" placeholder="请输入" />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="密码" prop="psw">
                <el-input v-model="ruleForm.psw" placeholder="请输入" />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.psw" placeholder="请输入" />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="性别" prop="gender">
                <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
                <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="地区" prop="region">
                <el-input v-model="ruleForm.region" placeholder="请输入" />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="详细地址" prop="adress">
                <el-input v-model="ruleForm.adress" placeholder="请输入" />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="手机号" prop="tel">
                <el-input v-model="ruleForm.tel" placeholder="请输入" />
              </el-form-item>
            </el-row>

            <el-row :span="24" type="flex" justify="center">
              <el-button type="primary">保存</el-button>
            </el-row>
          </el-col>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          index: '1',
          name: '张琳',
          gender: '女',
          nickName: '张琳',
          region: '北京市',
          role: '专家',
          code: '09123123141',
          result: '',
          occupation: ''
        },
        {
          index: '2',
          name: '张二',
          gender: '男',
          nickName: '张琳',
          region: '北京市',
          role: '专家',
          code: '09123123141',
          result: '',
          occupation: ''
        }
      ],
      ruleForm: {
        userName: '',
        psw: '',
        name: '',
        region: '',
        tel: '',
        radio: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        oldPsw: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        newPsw: [
          {
            required: true,
            message: '密码长度8-19，且至少含有数字、小写字母、大写字母',
            trigger: 'blur'
          }
        ],
        psw: [
          {
            required: true,
            message: '密码长度8-19，且至少含有数字、小写字母、大写字母',
            trigger: 'blur'
          }
        ],
        name: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          }
        ],
        region: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          }
        ],
        tel: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
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
</style>
