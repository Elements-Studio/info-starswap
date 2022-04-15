<template>
  <div class="">
    <div class="bGNJgd" />
    <Header />
    <div class="eqcyAL">
      <div class="knkUAB">
        <div class="cyNANi" />
        <div class="klmLHi">
          <!--  -->
          <div class="sc-jKJlTe sc-hMqMXs sc-kEYyzF sc-hmXxxW iRpZpS">
            <div class="sc-brqgnP cGsJEc">
              <div class="sc-jKJlTe sc-hMqMXs sc-hSdWYo eJnjNO">
                <!-- <div class="sc-gPEVay elwIhs">
                  <img class="sc-jAaTju gmNyeI sc-iRbamj cAezNW" alt="token logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" />
                  <img sizeraw="24" class="sc-jAaTju gmNyeI sc-jlyJG dkCxRg" alt="token logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png" />
                </div> -->
                <div class="sc-chPdSV goKJOd css-1c56wny">{{ token }}</div>
                <!-- <div class="sc-jKJlTe sc-gipzik sc-fAjcbJ hHQgLw">0.3%</div> -->
              </div>
              <!-- <div class="sc-jKJlTe sc-hMqMXs sc-kEYyzF sc-hmXxxW ccPGLM">
                <a class="sc-EHOje iJZiMq" href="#/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">
                  <div class="sc-jKJlTe sc-gipzik sc-bRBYWo sc-ipXKqB jMUUPo">
                    <div class="sc-jKJlTe sc-hMqMXs sc-hSdWYo eJnjNO">
                      <div class="sc-chPdSV goKJOd css-1qjlrio" style="white-space: nowrap">1 USDC = &lt;0.001 ETH</div>
                    </div>
                  </div>
                </a>
                <a class="sc-EHOje iJZiMq" href="#/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2">
                  <div class="sc-jKJlTe sc-gipzik sc-bRBYWo sc-ipXKqB cGkprt">
                    <div class="sc-jKJlTe sc-hMqMXs sc-hSdWYo eJnjNO">
                      <div class="sc-chPdSV goKJOd css-1qjlrio" style="white-space: nowrap">1 ETH = 2.95k USDC</div>
                    </div>
                  </div>
                </a>
              </div> -->
            </div>
            <div class="sc-jKJlTe sc-hMqMXs sc-hSdWYo eJnjNO">
              <a target="_blank" rel="noopener noreferrer" href="https://starswap.xyz/#/add/v2/STC" class="sc-bZQynM eeMlQm">
                <button width="170px" class="sc-jKJlTe boxoJV sc-caSCKo sc-cHGsZl bGaXYF" style="height: 44px">
                  <div class="sc-jKJlTe sc-hMqMXs sc-kEYyzF hoBMFR">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <div style="display: flex; align-items: center">Add Liquidity</div>
                  </div>
                </button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://starswap.xyz/#/swap" class="sc-bZQynM eeMlQm"><button width="100px" class="sc-jKJlTe fciBLm sc-caSCKo sc-gisBJw iiQzrT" style="height: 44px">Trade</button></a>
            </div>
          </div>
          <!--  -->
          <div class="hsPAQl">
            <div class="cqwlBw sc-brqgnP cGsJEc">
              <div class="sc-jKJlTe sc-gipzik sc-bRBYWo bkUbRL">
                <div class="sc-brqgnP dbhmjy">
                  <div class="sc-chPdSV jOqbNQ css-r99fas">Total Tokens Locked</div>
                  <div class="sc-jKJlTe sc-hMqMXs sc-kEYyzF hoBMFR">
                    <div class="sc-jKJlTe sc-hMqMXs sc-hSdWYo eJnjNO">
                      <!-- <img class="sc-jAaTju cxFJyV" alt="token logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" /> -->
                      <div class="sc-chPdSV goKJOd css-x9lxcn">{{ token.split('/')[0] }}</div>
                    </div>
                    <div class="sc-chPdSV goKJOd css-4wozcx">${{ coinUnitConvert(detail.tvl_a) }}</div>
                  </div>
                  <div class="sc-jKJlTe sc-hMqMXs sc-kEYyzF hoBMFR">
                    <div class="sc-jKJlTe sc-hMqMXs sc-hSdWYo eJnjNO">
                      <!-- <img class="sc-jAaTju cxFJyV" alt="token logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png" /> -->
                      <div class="sc-chPdSV goKJOd css-x9lxcn">{{ token.split('/')[1] }}</div>
                    </div>
                    <div class="sc-chPdSV goKJOd css-4wozcx">${{ coinUnitConvert(detail.tvl_b) }}</div>
                  </div>
                </div>
              </div>

              <div class="sc-brqgnP eDrHS">
                <div class="sc-chPdSV jOqbNQ css-1xcdix">TVL</div>
                <div class="sc-chPdSV goKJOd css-5omc5c">${{ coinUnitConvert(detail.tvl_a + detail.tvl_b) }}</div>
              </div>
              <div class="sc-brqgnP eDrHS">
                <div class="sc-chPdSV jOqbNQ css-1xcdix">Volume</div>
                <div class="sc-chPdSV goKJOd css-5omc5c">${{ coinUnitConvert(detail.volume) }}</div>
              </div>
              <div class="sc-brqgnP eDrHS">
                <div class="sc-chPdSV jOqbNQ css-1xcdix">Fees</div>
                <div class="sc-chPdSV goKJOd css-5omc5c">{{ optionFees.series[0].data[0] }}</div>
              </div>
            </div>
            <div class="cqwlBw">
              <div class="tab">
                <span v-for="(item, index) in tabs" :key="index" :class="{ active: index == tabsIndex }" @click="tabSwitch(index)">{{ item }}</span>
              </div>
              <div ref="main1" class="echarts" />
            </div>
          </div>
          <!-- Transactions -->
          <div class="jOqbNQ css-r99fas">Transactions</div>
          <TransactionsList val="pools" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../src/components/header'
// import Footer from '../../../src/components/footer'
import { getPoolDetail, poolFees, poolList } from '@/api/interface'
import TransactionsList from '../../../src/components/transactionsList'
import * as echarts from 'echarts'
import { alignLeft,transformTime,transformDate,unitConvert } from '@/utils/public'

// import { truncate } from 'fs/promises'
// import { login } from '@/api/user'
// import { setToken, removeToken } from '@/utils/auth'

export default {
  name: 'PoolsDetail',
  components: { Header, TransactionsList },
  data() {
    return {
      myChart: null,
      token: '',
      detail: {},
      tabs: ['Volume', 'TVL', 'Fees'],
      tabsIndex: 0,
      pools: [],
      // poolsList: [],
      page: 1,
      transactions: [],
      optionTVL: {
        color: ['#80FFA5'],
        title: {
          text: 'TVL'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: []
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'value'
          }
        ],
        series: [
          {
            name: '',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 1
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: []
          }
        ]
      },
      optionVolume: {
        title: {
          text: 'Volume'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'value'
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            data: []
          }
        ]
      },
      optionFees: {
        title: {
          text: 'Fees'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Fees',
            type: 'bar',
            data: []
          },
          {
            name: 'Fees Amount',
            barWidth: '60%',
            type: 'bar',
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.token = this.$route.query.token
    console.log('token:', this.token)

    this.getPoolDetail_()
    this.poolList_(0)
  },
  methods: {
    coinUnitConvert(num){
      let data = unitConvert(num)
      return data.num + data.unit
    },
    getPoolDetail_() {
      getPoolDetail({ token: this.token }).then((res) => {
        // console.log(res)
        this.detail = res
      })
    },
    poolList_(type) {
      if (type === 2) {
        this.getPoolFees()
        return
      }
      poolList({ page: 1, token: this.token, count: 30 }).then((res) => {
        // console.log(res)
        // this.poolsList = res

        // 按时间排序
        const newData = []
        res.forEach((e) => {
          newData.push({ date: transformDate(e.timestamp), tvl_a: e.tvl_a, tvl_b: e.tvl_b, volume: e.volume })
        })
        newData.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
        console.log(newData)

        const statDate = []
        const volume = []
        const tvl = []
        newData.forEach((e) => {
          statDate.push(e.date)
          volume.push(e.volume)
          tvl.push(e.tvl_a + e.tvl_b)
        })
        // console.log(volume, tvl)
        this.optionVolume.xAxis[0].data = this.optionTVL.xAxis[0].data = statDate
        this.optionVolume.series[0].data = volume
        this.optionTVL.series[0].data = tvl

        if (type === 0) {
          echarts.init(this.$refs.main1).setOption(this.optionVolume, true)
        }
        if (type === 1) {
          echarts.init(this.$refs.main1).setOption(this.optionTVL, true)
        }
        alignLeft() // 表格第一列左对齐
      })
    },
    getPoolFees() {
      poolFees({ page: this.page, token: this.token }).then((res) => {
        // console.log(11, res)

        const timestamp = []
        const feesAmount = []
        const fees = []
        res.forEach((e) => {
          timestamp.push(transformTime(e.timestamp))
          feesAmount.push(e.fees_amount)
          fees.push(e.fees)
        })
        this.optionFees.series[0].data = fees
        this.optionFees.series[1].data = feesAmount
        this.optionFees.xAxis[0].data = timestamp
        this.optionFees.title.text = this.token
        echarts.init(this.$refs.main1).setOption(this.optionFees, true)

        // [{"timestamp": xxx, "feesAmount": xxx, "fees": xxx},]
        // 字段分别含义：日期，交易费数量， 交易费总价格
      })
    },

    tabSwitch(index) {
      this.tabsIndex = index
      console.log(this.tabsIndex)
      this.poolList_(index)
    }
  }
}
</script>

<style scoped>
/* 表格内背景颜色 */
/deep/ .el-table th {
  color: #ffffff; /* 字体颜色 */
  font-size: 16px;
  background-color: transparent !important; /* 背景透明 */
  border: 0;
  height: 30px;
  line-height: 30px;
}
/deep/ .el-table tr,
.el-table td {
  color: #e5dada;
  font-size: 12px;
  background-color: transparent !important; /* 背景透明 */
  border: 0;
  height: 30px;
  line-height: 30px;
}
/deep/ .el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgb(31, 33, 40);
}
/deep/ .el-table td.el-table__cell {
  font-size: 14px;
  border-bottom: 1px solid rgb(31, 33, 40);
}
/deep/ .el-table::before {
  background: rgb(31, 33, 40);
}

/deep/ .el-pagination .btn-prev {
  background: transparent !important;
}
/deep/ .el-pagination .btn-next {
  background: transparent !important;
}
/deep/ .el-pager li {
  background: transparent !important;
}
</style>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 400px;
}
.bGNJgd {
  width: 100%;
  background-color: rgb(0, 0, 0);
  padding: 10px 20px;
  height: 42.5px;
}

.cyNANi {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  pointer-events: none;
  height: 200vh;
  mix-blend-mode: color;
  background: radial-gradient(50% 50% at 50% 50%, rgb(252, 7, 125) 0%, rgba(255, 255, 255, 0) 100%);
  transform: translateY(-150vh);
  max-width: 100vw !important;
}
.dUjLmT {
  display: grid;
  grid-template-columns: 1fr 120px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0px;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
  background-color: rgb(25, 27, 31);
}
.jHUClt {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.dUhcvK {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
}
.dcYJON {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.bYxUGR.ACTIVE {
  border-radius: 12px;
  background-color: rgb(44, 47, 54);
  color: rgb(255, 255, 255);
}
.bYxUGR {
  display: flex;
  flex-flow: row nowrap;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: rgb(108, 114, 132);
  font-size: 1rem;
  width: fit-content;
  margin: 0px 6px;
  padding: 8px 12px;
  font-weight: 500;
}
.eqcyAL {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 25px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  overflow: hidden auto;
  z-index: 1;
}
.eqcyAL > * {
  max-width: 1200px;
}
.knkUAB {
  width: 90%;
}
.klmLHi {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 32px;
}
.css-r99fas {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
}
.jOqbNQ {
  color: rgb(195, 197, 203);
}

.hoBMFR {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.css-tb43nw {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  color: rgb(33, 114, 229);
}

.eJnjNO {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.hoBMFR {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
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

.iRpZpS {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  align-items: flex-end;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.cGsJEc {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 24px;
}
.eJnjNO {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.eJnjNO {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.ccPGLM {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.elwIhs {
  position: relative;
  display: flex;
  flex-direction: row;
}
.css-1c56wny {
  box-sizing: border-box;
  margin: 0px 8px;
  min-width: 0px;
  font-weight: 500;
  font-size: 24px;
}
.hHQgLw {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: fit-content;
  border-radius: 8px;
  background: rgb(64, 68, 79);
  color: rgb(255, 255, 255);
  padding: 4px 6px;
  font-weight: 400;
}
.gmNyeI {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(86, 90, 105);
}
.jMUUPo {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  background-color: rgb(44, 47, 54);
  padding: 8px 12px;
  border-radius: 10px;
}
.eJnjNO {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.cxFJyV {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(86, 90, 105);
}
.cGkprt {
  box-sizing: border-box;
  margin: 0px 0px 0px 10px;
  min-width: 0px;
  width: 100%;
  background-color: rgb(44, 47, 54);
  padding: 8px 12px;
  border-radius: 10px;
}
.eJnjNO {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.iJZiMq {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  font-weight: 500;
  font-size: 16px;
}
.eJnjNO {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.eeMlQm {
  text-decoration: none;
  cursor: pointer;
  color: rgb(33, 114, 229);
  font-weight: 500;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
}
.bGaXYF {
  padding: 8px 16px;
  margin-right: 10px;
  width: 170px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: rgb(64, 68, 79);
  color: rgb(195, 197, 203);
  font-size: 16px;
  font-weight: 500;
  outline: none;
}
.iiQzrT {
  padding: 8px 16px;
  width: 100px;
  font-weight: 500;
  text-align: center;
  border-radius: 12px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: rgb(33, 114, 229);
  color: white;
}
//
.hsPAQl {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1em;
}

.cqwlBw {
  position: relative;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  border-radius: 16px;
  padding: 1rem;
  background-color: rgb(25, 27, 31);
}
.css-r99fas {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
}
.bkUbRL {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  background-color: rgb(44, 47, 54);
}
.dbhmjy {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
}
.css-x9lxcn {
  box-sizing: border-box;
  margin: 0px 0px 0px 8px;
  min-width: 0px;
  font-weight: 500;
  font-size: 14px;
}
.eDrHS {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 4px;
}
.css-1xcdix {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
}
.css-5omc5c {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 24px;
}
.css-z59h47 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 16px;
}
.ksHUsh {
  font-size: 16px;
  font-weight: 500;
  color: rgb(39, 174, 96);
}
.hoBMFR {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.iJZiMq {
  color: #8a9fe0;
}
.iJZiMq:hover {
  color: #1c4bde;
}
.tab {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 15px;
  display: flex;
}
.tab span {
  padding: 3px 10px;
  margin-right: 5px;
  background: #1f2128;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
}
.tab .active {
  background: #40444f;
}
</style>
