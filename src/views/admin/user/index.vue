<template>
  <div>
    <div class="backContent">
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="formInline.name" placeholder="" />
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.status">
              <el-option label="请选择" value=""></el-option>
              <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="formInline.roleId">
              <el-option label="请选择" value=""></el-option>
              <el-option v-for="item in roleIdType" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-container>
        <el-main>
          <div class="table">
            <el-table :data="tableData" style="width: 100%" stripe fit="true">
              <el-table-column label="序号" width="50" align="center">
                <template slot-scope="scope">
                  {{ scope.$index + 1 }}
                </template>
              </el-table-column>
              <el-table-column label="姓名" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.name }}</template>
              </el-table-column>
              <el-table-column label="性别" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.gender }}</template>
              </el-table-column>
              <el-table-column label="昵称" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.gender }}</template>
              </el-table-column>
              <el-table-column label="地区" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.gender }}</template>
              </el-table-column>
              <el-table-column label="角色" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.gender }}</template>
              </el-table-column>
              <el-table-column label="组织机构代码" width="150" align="center">
                <template slot-scope="scope">{{ scope.row.gender }}</template>
              </el-table-column>
              <el-table-column label="审核结果" width="100" align="center">
                <template slot-scope="scope">{{ scope.row.gender }}</template>
              </el-table-column>
              <el-table-column prop="occupation" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" @click.native.prevent="viewRow(scope.$index, tableData)">
                    查看
                  </el-button>
                  <el-button type="text" @click.native.prevent="editRow(scope.$index, tableData)">
                    编辑
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { userList } from '@/api/user'
export default {
  name: 'Home',

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
        }
        // {
        //   index: '2',
        //   name: '张二',
        //   gender: '男',
        //   nickName: '张琳',
        //   region: '北京市',
        //   role: '专家',
        //   code: '09123123141',
        //   result: '',
        //   occupation: ''
        // }
      ],
      status: [
        { value: 1, label: '一级' },
        { value: 2, label: '二级' }
      ],
      roleIdType: [
        { value: 1, label: '专家' },
        { value: 2, label: '管理员' },
        { value: 3, label: '普通用户' },
        { value: 4, label: '机构用户' },
        { value: 5, label: 'VIP用户' }
      ],
      formInline: {
        name: '',
        status: '',
        roleId: ''
      },
      page: {
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    editRow() {
      this.$router.push('/admin/user/edit')
    },
    viewRow() {
      this.$router.push('/admin/user/view')
    },
    // 获取用户数据列表
    getUserList() {
      // let data = {
      //   pageNum:1,
      //   pageSize:10,
      //   // name:"",
      //   // status:"",
      //   // roleId:""
      // }
      userList(this.page).then(res => {
        console.log(res)
        this.resData = res.list
      })
    },
    search() {
      const params = {
        ...this.page,
        ...this.formInline
      }
      debugger
      userList({ params }).then(res => {
        console.log(res)
        this.resData = res.list
      })
    },
    reset() {
      this.formInline = {
        name: '',
        status: '',
        roleId: ''
      }
      userList(this.page).then(res => {
        console.log(res)
        this.resData = res.list
      })
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
