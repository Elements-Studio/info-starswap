<template>
  <div>
    <div class="gkTejM">
      <el-table :data="pools" style="background: none" :header-cell-style="{ 'text-align': 'right' }" :cell-style="{ 'text-align': 'right', background: '#191b1f' }">
        <el-table-column type="index" label="#" width="40" />
        <el-table-column prop="pool_name" label="Pool Name" sortable>
          <template slot-scope="scope">
            <div style="text-align:left">
            <a class="iJZiMq" :href="'#/poolsDetail?token=' + scope.row.pool_name">{{ scope.row.pool_name }}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tvl_a" label="tvlA" sortable>
          <template slot-scope="scope">
            <div>${{coinUnitConvert(scope.row.tvl_a)}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="tvl_a_amount" label="tvlAAmount">
          <template slot-scope="scope">{{coinUnitConvert(scope.row.tvl_a_amount)}}</template>
        </el-table-column>
        <el-table-column prop="tvl_b" label="tvlB"  sortable>
          <template slot-scope="scope">${{coinUnitConvert(scope.row.tvl_b)}}</template>
        </el-table-column>
        <el-table-column prop="tvl_b_amount" label="tvlBAmount" >
          <template slot-scope="scope">{{coinUnitConvert(scope.row.tvl_b_amount)}}</template>
        </el-table-column>
        <el-table-column prop="volume" label="volume" >
          <template slot-scope="scope">${{coinUnitConvert(scope.row.volume)}}</template>
        </el-table-column>
        <el-table-column prop="volume_amount" label="volumeAmount">
          <template slot-scope="scope">{{coinUnitConvert(scope.row.volume_amount)}}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getPool,poolStats } from '@/api/interface'
import { alignLeft, unitConvert } from '@/utils/public'
export default {
  name: 'Footer',
  props: ['val'],
  components: {},
  data() {
    return {
      token:'',
      pools: []
    }
  },
  mounted() {
    this.token = this.$route.query.token
    this.getPool_()
  },
  methods: {
    coinUnitConvert(num){
      let data = unitConvert(num)
      return data.num + data.unit
    },
    getPool_() {
      if (this.val === 'token') {
        poolStats({ token: this.token, page: 1 }).then((res) => {
          console.log(44,res)
          this.pools = res
        })
      }else{
        getPool({ page: 1 }).then((res) => {
          // console.log(333,res)
          this.pools = res
          alignLeft()
        })
      }
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
.lr10 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 10px;
  text-align: left;
}
.iJZiMq {
  color: #8a9fe0;
}
.iJZiMq:hover {
  color: #1c4bde;
}
</style>
