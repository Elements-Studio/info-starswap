<template>
  <div>
    <div class="carousel">
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="标题">
            <el-input v-model="formInline.title" placeholder="" />
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="全部">
              <el-option label="已发布" value="1" />
              <el-option label="未发布" value="2" />
              <el-option label="取消发布" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      </div>

      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="index" label="序号" width="60">
            <template slot-scope="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column prop="title" width="250" label="轮播图标题" />
          <el-table-column prop="lastUpdateUser" label="最后修改人" />
          <el-table-column prop="lastUpdateDate" label="修改时间" />
          <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
              {{ scope.row.status ? '已发布' : '未发布' }}
            </template>
          </el-table-column>
          <el-table-column prop="occupation" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click.native.prevent="setCarouselEdit(scope.row)">
                编辑
              </el-button>
              <el-button type="text" @click="setCarouselDel(scope.row.id)">
                删除
              </el-button>
              <el-button v-if="scope.status === 1" type="text" @click.native.prevent="setCarouselPublish(scope.row.id)">
                取消发布
              </el-button>
              <el-button v-if="scope.status === 0" type="text" @click.native.prevent="setCarouselPublish(scope.row.id)">
                发布
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div v-show="param.pageTotal > 1" class="pageList">
        <el-pagination background="" layout="prev, pager, next" :page-size="param.pagesize" :total="param.pagesize * param.pageTotal" @current-change="currentChange" />
      </div>

      <!-- 新建 || 编辑 -->
      <el-dialog :title="isAdd ? '新建' : '编辑'" :visible.sync="dialogFormVisible" width="800px" class="el_dialog_panel">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
          <el-row>
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title" placeholder="请输入" />
            </el-form-item>
          </el-row>
          <el-row>
            <div class="avatar-uploader">
              <div class="el-upload el-upload--text" @click.stop="onInputFile()">
                <img v-if="form.imgData" :src="form.imgData" class="avatar" style="width:150px" />
                <input type="file" name="file" id="uploadIcon" accept="image/gif, image/jpeg, image/jpg, image/png, image/bmp" class="el-upload__input" @change="uploadImg($event)" ref="uploadIcon" />
              </div>
            </div>
          </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="setCarouselCreate()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { carouselList, carouselCreate, carouselEdit, carouselDel, carouselPublish } from '@/api/carousel'
import { upload } from '@/api/upload'
export default {
  name: 'Carousel',

  data() {
    return {
      form: {
        imgData: ''
      },
      imageUrl: '',
      tableData: [
        {
          title: '这是一个标题',
          lastUpdateUser: '就是你',
          lastUpdateDate: '2021-10-29',
          status: 1
        }
      ],
      ruleForm: {
        title: '',
        fileId: '12'
      },
      rules: {
        title: [{ required: true, message: '请输入', trigger: 'blur' }]
        // fileId: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
      formInline: {
        title: '',
        ststus: ''
      },
      param: {
        pageNum: 1,
        pagesize: 10,
        title: '',
        status: ''
      },
      // dialog
      isAdd: true,
      dialogFormVisible: false
    }
  },
  mounted() {
    this.getCarouselList()
  },
  methods: {
    uploadImg(event) {
      const file = event.target.files[0]
      console.log(444, event.target.files[0])
      // 限制svg格式
      if (file.type === 'image/svg+xml') {
        this.$message.error({ type: 'waring', message: '支持图片格式:JPG、GIF、PNG、BMP' })
        return
      }
      const reader = new FileReader()
      const that = this
      const imgSize = file.size / 1024 / 1024 < 2
      // 限制图片大小
      if (!imgSize) {
        this.$message({ message: '图片上传文件大小不能超过2MB!', type: 'warning' })
        return
      }
      this.uploadFile({
        module: '提交审核',
        type: '1', // 0:文件, 1：照片, 2:视频
        suffix: file.name.split('.')[1],
        size: file.size,
        fileName: file.name,
        time: ''
      })
      reader.readAsDataURL(file)
      reader.onload = function() {
        that.form.imgData = reader.result
      }
    },
    onInputFile() {
      const eleNav = document.getElementById('uploadIcon')
      eleNav.click()
    },
    uploadFile(param) {
      upload(param).then(res => {
        console.log(res)
      })
    },
    //
    getCarouselList() {
      carouselList(this.param).then(res => {
        console.log(res)
        this.param.pageTotal = res.data.totalPage
        this.tableData = res.data.list
      })
    },
    setCarouselCreate() {
      carouselCreate(this.ruleForm).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$message.success(res.message)
          this.getCarouselList()
          this.dialogFormVisible = false
        }
      })
    },
    setCarsouselEdit(id, title, content) {
      carouselEdit({ id: id, title: title, content: content }).then(res => {
        console.log(res)
      })
    },
    setCarouselDel(id) {
      this.$confirm('确定要删除此轮播图?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          carouselDel({ id: id }).then(res => {
            if (res.code === 200) {
              this.$message.success(res.message)
              this.getCarouseList()
            }
          })
        })
        .catch(() => {
          this.$message('取消操作')
        })
    },
    setCarouselPublish(id) {
      carouselPublish({ id: id }).then(res => {
        console.log(res)
      })
    },
    reset() {
      this.param = {
        pageNum: 1,
        pagesize: 10,
        title: '',
        status: ''
      }
      this.formInline = {
        title: '',
        ststus: ''
      }
      this.getCarouselList()
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form-item__label {
  font-size: 14px;
  font-family: SourceHanSansCN, SourceHanSansCN-Medium;
  font-weight: 500;
  text-align: right;
  color: #272c4a;
}
.carousel {
  min-height: 700px;
  margin: 20px;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
}
.search {
  width: 100%;
  margin: 0 auto;
}
.table {
  width: 100%;
  margin: 0 auto;
}
.pageList {
  padding: 30px;
  text-align: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
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
</style>
