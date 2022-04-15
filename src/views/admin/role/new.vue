<template>
  <div>
    <div class="backContent">
      <div>新建</div>
      <div class="form">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
        >
          <el-col>
            <el-row>
              <el-form-item label="角色名称" prop="roleName">
                <el-input v-model="ruleForm.roleName" placeholder="请输入" />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item label="备注">
                <el-input
                  v-model="ruleForm.textarea"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入"
                />
              </el-form-item>
            </el-row>
            <el-row :span="24">
              <el-form-item :rows="2" label="状态" prop="state">
                <el-radio v-model="ruleForm.state" label="1">有效</el-radio>
                <el-radio v-model="ruleForm.state" label="2">无效</el-radio>
              </el-form-item>
            </el-row>
          </el-col>
          <el-row>
            <el-form-item :rows="24" label="权限配置">
              <div class="permission">
                <div class="left">
                  <div class="head">一级模块</div>
                  <div class="one">
                    <el-checkbox
                      v-model="checked"
                      :style="{ 'vertical-align': 'middle' }"
                    >后台管理</el-checkbox>
                  </div>
                </div>
                <div class="right">
                  <div class="head">二级模块</div>
                  <div class="two">
                    <li><el-checkbox>关键节点管理</el-checkbox></li>
                    <li><el-checkbox>关键节点管理</el-checkbox></li>
                    <li><el-checkbox>关键节点管理</el-checkbox></li>
                    <li><el-checkbox>关键节点管理</el-checkbox></li>
                    <li><el-checkbox>关键节点管理</el-checkbox></li>
                  </div>
                </div>
              </div>
            </el-form-item>
          </el-row>
        </el-form>
        <el-button type="primary" :style="{'margin-left':'120px'}">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        roleName: '',
        textarea: '',
        permission: '',
        state: '',
        name: '',
        region: '',
        tel: '',
        radio: ''
      },
      rules: {
        roleName: [{ required: true, message: '请输入', trigger: 'blur' }],

        state: [
          {
            required: true,
            message: '',
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
.permission {
  display: flex;
  flex-wrap: nowrap;
  width: 600px;
}
.left {
  width: 162px;
  border: 1px solid #cccccc;
}
.right {
  width: 378px;
  border: 1px solid #cccccc;
  border-left: 0px;
}
.head {
  background-color: #f0f1f3;
  color: #272c4a;
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
}
.one {
  width: 162px;
}
.two {
  width: 378px;
}
li {
  list-style: none;
  border-bottom: 1px solid #cccccc;
}
</style>
