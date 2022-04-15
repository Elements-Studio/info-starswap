<template>
  <div>
    <div class="gkTejM">
      <div class="tab">
        <span v-for="(item, index) in tabs" :key="index" :class="{ active: index == tabsIndex }" @click="tabSwitch(index)">{{ item }}</span>
      </div>

      <el-table v-loading="loading" :data="transactions" class="transactions" style="background: none" :header-cell-style="{ 'text-align': 'right' }" :cell-style="{ 'text-align': 'right', background: '#191b1f' }">
        <el-table-column type="index" label="#" width="40" />
        <el-table-column prop="swap_type" label="swapType" width="200" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <div class="lr10">
              <a class="iJZiMq" target="_blank" :href="'https://stcscan.io/main/transactions/detail/' + scope.row.transaction_hash">{{ scope.row.swap_type }}</a>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="account" label="Account" width="160">
          <template slot-scope="scope">
            <span class="lr10">
              <a class="iJZiMq" target="_blank" :href="'https://stcscan.io/main/address/' + scope.row.transaction_hash">{{ substring(scope.row.transaction_hash) }}</a>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="amount_a" label="amountA">
           <template slot-scope="scope">{{ coinUnitConvert(scope.row.amount_a)}} {{ scope.row.token_a}}</template>
        </el-table-column>
        <el-table-column prop="amount_b" label="amountB">
          <template slot-scope="scope">{{  coinUnitConvert(scope.row.amount_b)}} {{ scope.row.token_b}}</template>
        </el-table-column>
        
        <el-table-column prop="total_value" label="totalValue">
          <template slot-scope="scope">${{  coinUnitConvert(scope.row.total_value)}}</template>
        </el-table-column>
        <!-- <el-table-column prop="transaction_hash" label="transactionHash" /> -->
        <el-table-column prop="timestamp" label="Time" width="170" sortable>
          <template slot-scope="scope">
            {{ transformTime(scope.row.timestamp) }}
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="page" :page-size="param.count" :hide-on-single-page="false" layout="next" :total="500" @current-change="handleCurrentChange($event)" />

      <!-- <el-pagination @size-change="handleSizeChange($event, 'model')" @current-change="handleCurrentChange($event, 'model')" :current-page="modelParam.pageable.page + 1" :page-sizes="[10, 20, 30, 50]" :page-size="modelParam.pageable.size" layout="total, sizes, prev, pager, next, jumper" :total="devicesTotal"></el-pagination> -->
    </div>
  </div>
</template>

<script>
import { transactions, transactionsToken, transactionsPool } from '@/api/interface'
import { unitConvert } from '@/utils/public'
export default {
  name: 'Footer',
  props: ['val'],
  components: {},
  data() {
    return {
      loading: false,
      tabs: ['all', 'swap', 'add', 'remove'],
      tabsIndex: 0,
      transactions: [],
      param: { token: '', count: 10, filter: 'all' },
      page: 1,
    }
  },
  mounted() {
    console.log(this.val)
    this.param.token = this.param.pool_name = this.$route.query.token
    this.transactions_()
  },
  methods: {
    coinUnitConvert(num){
      let data = unitConvert(num)
      return data.num + data.unit
    },
    transactions_() {
      // this.loading = true
      if (this.val === 'home') {
        transactions(this.param).then((res) => {
          this.transactions = res
          this.loading = false
        })
      }
      if (this.val === 'token') {
        transactionsToken(this.param).then((res) => {
          this.transactions = res
          this.loading = false
        })
      }
      if (this.val === 'pools') {
        delete this.param.token
        transactionsPool(this.param).then((res) => {
          this.transactions = res
          this.loading = false
        })
      }
    },
    tabSwitch(index) {
      this.tabsIndex = index
      console.log(this.tabsIndex)
      this.param.filter = this.tabs[index]
      this.transactions_()
    },
    substring(str) {
      return str.substring(0, 4) + '...' + str.substring(str.length - 4)
    },
    // 时间戳转时间
    transformTime(timestamp) {
      var date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

      const strDate = Y + M + D + h + m + s
      // console.log(strDate) // 2022-02-08 17:44:56
      return strDate
    },
    handleCurrentChange(page) {
      console.log(page)
      this.param.start_id = this.transactions[9].id
      this.transactions_()
    },
  },
}
</script>

<style lang="scss">
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
.page {
  background: transparent;
  text-align: center;
  padding: 15px;
}
.tab {
  display: flex;
}
.tab span {
  padding: 5px;
  margin-right: 5px;
  background: #1f2128;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}
.tab .active {
  background: #40444f;
}
</style>
