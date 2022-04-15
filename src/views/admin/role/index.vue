<template>
  <div>
    <div class="backContent">
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="角色名称">
            <el-input v-model="formInline.role" placeholder="" />
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="全部">
              <el-option label="有效" value="1" />
              <el-option label="无效" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="table">
        <el-table :data="tableData" style="width: 100%" stripe fit="true">
          <el-table-column prop="index" label="序号" />
          <el-table-column prop="role" label="角色" />
          <el-table-column prop="profile" label="描述" />
          <el-table-column prop="result" label="审核结果" />
          <el-table-column prop="occupation" label="操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click.native.prevent="viewRow(scope.$index, tableData)"
              >
                查看
              </el-button>
              <el-button
                type="text"
                size="small"
                @click.native.prevent="editRow(scope.$index, tableData)"
              >
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      tableData: [
        {
index:'1',
role:'管理员',
profile:'超级管理员',
result:'',
occupation:''
        },
        {
index:'2',
role:'普通用户',
profile:'仅有查看权限',
result:'',
occupation:''
        }
      ],
      formInline: {
        role: '',
        region: '',
      }
    }
  },
  mounted() {},
  methods: {
        editRow() {
      // this.$router.push('/admin/user/edit')
    },
        viewRow(){
            // this.$router.push('/admin/user/view')

    }
  }
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
</style>
