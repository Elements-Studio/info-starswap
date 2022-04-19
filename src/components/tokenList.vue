<template>
  <div>
    <div class="gkTejM">
      <el-table :data="tokens" style="background: none" :header-cell-style="{ 'text-align': 'right' }" :cell-style="{ 'text-align': 'right', background: '#191b1f' }">
        <el-table-column type="index" label="#" width="40" />
        <el-table-column prop="token" label="Token Name" class="tokenNmae" align="left" sortable>
          <template slot-scope="scope">
            <div style="text-align:left">
              <a class="iJZiMq" :href="'#/tokensDetail?token=' + scope.row.token">{{ scope.row.token }}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="volume_amount" label="Volume Amount">
          <template slot-scope="scope">
             {{ coinUnitConvert(scope.row.volume_amount) }}
          </template>
        </el-table-column>
        <el-table-column prop="volume" label="Volume">
          <template slot-scope="scope">${{coinUnitConvert(scope.row.volume)}}</template>
        </el-table-column>
        <el-table-column prop="tvl_amount" label="TVL Amount">
          <template slot-scope="scope">{{coinUnitConvert(scope.row.tvl_amount)}}</template>
        </el-table-column>
        <el-table-column prop="tvl" label="TVL" sortable>
          <template slot-scope="scope">${{coinUnitConvert(scope.row.tvl)}}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { tokenList } from '@/api/interface'
import { alignLeft, unitConvert } from '@/utils/public'
export default {
  name: 'TokenList',
  components: {},
  data() {
    return {
      tokens: []
    }
  },
  mounted() {
    this.getToken_()
  },
  methods: {
    coinUnitConvert(num){
      let data = unitConvert(num)
      return data.num + data.unit
    },
    getToken_() {
      tokenList({}).then((res) => {
        // console.log(222,res)
        this.tokens = res
        alignLeft()
      })
    }
  }
}
</script>
<style lang="scss">

.el-table td.el-table__cell div{
  justify-content: flex-end;
}
.el-table td.el-table__cell div:nth-child(2){
  display: flex;justify-content: flex-start;
}
.gkTejM {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  border-radius: 16px;
  padding: 1rem;
  background-color: rgb(25, 27, 31);
  width: 100%;
}
.css-9p76rv {
  box-sizing: border-box;
  margin: 0px 0px 0px 8px;
  min-width: 0px;
  font-weight: 500;
  color: rgb(108, 114, 132);
}
.iJZiMq {
  color: #8a9fe0;
}
.iJZiMq:hover {
  color: #1c4bde;
}
.lr10 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 10px;
  text-align: right;
}
</style>
