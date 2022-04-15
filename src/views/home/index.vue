<template>
  <div class="">
    <!-- <Header />
    <div class="content">sdsd</div>
    <Footer /> -->
    <div class="bGNJgd" />
    <Header />
    <div class="eqcyAL">
      <div class="knkUAB">
        <div class="cyNANi" />
        <div class="klmLHi">
          <div class="jOqbNQ css-r99fas">Starswap Overview</div>
          <div class="hdNOyW">
            <div class="icOiVI">
              <div class="bmITCN">
                <div ref="main1" class="echarts" />
              </div>
            </div>
            <div class="icOiVI">
              <div class="bmITCN">
                <div ref="main2" class="echarts" />
              </div>
            </div>
          </div>

          <!-- Tokens -->
          <div class="hoBMFR">
            <div class="jOqbNQ css-r99fas">All Tokens</div>
            <a class="iJZiMq" href="#/tokens">Explore</a>
          </div>
          <TokenList />
          <!-- Pools -->
          <div class="hoBMFR">
            <div class="jOqbNQ css-r99fas">Top Pools</div>
            <a class="iJZiMq" href="#/pools">Explore</a>
          </div>
          <PoolsList val="pool" />
          <!-- Transactions -->
          <div class="jOqbNQ css-r99fas">Transactions</div>
          <TransactionsList val="home" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../src/components/header'
// import Footer from '../../../src/components/footer'
import TokenList from '../../../src/components/tokenList'
import PoolsList from '../../../src/components/poolsList'
import TransactionsList from '../../../src/components/transactionsList'
import * as echarts from 'echarts'
import { swapStats } from '@/api/interface'
import { alignLeft, unitConvert, transformDate } from '@/utils/public'
// import { setToken, removeToken } from '@/utils/auth'

export default {
  name: 'Home',
  components: {
    Header,
    // Footer,
    TokenList,
    PoolsList,
    TransactionsList
  },
  data() {
    return {
      // 分页
      page: 1,
      token: '',
      tokenName: '',
      // chart
      option1: {
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
          left: '-6%',
          right: '10',
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
        tooltip: {
          show: true,
          position: ['10', '13%'],
          textStyle:{
            fontSize: 18,
            color:'#FFFFFF',
          },
          backgroundColor:'none',
          borderWidth: 0,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
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
      option2: {
        title: {
          text: 'Volume'
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        grid: {
          left: '-3%',
          right: '0%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          show: true,
          position: ['10', '13%'],
          textStyle:{
            fontSize: 18,
            color:'#FFFFFF',
          },
          backgroundColor:'none',
          borderWidth: 0,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      }
    }
  },
  mounted() {
    this.swapStats_()
  },
  methods: {
    coinUnitConvert(num){
      let data = unitConvert(num)
      return data.num + data.unit
    },
    swapStats_() {
      swapStats({ page: this.page, count:30 }).then((res) => {
        // console.log(res)
        // 按日期排序
        const newData = []
        res.forEach((e) => {
          newData.push({ date: transformDate(e.timestamp), tvl: e.tvl, volume: e.volume })
        })
        newData.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
        // console.log(newData)

        // 图表数据
        const statDate = []
        const tvl = []
        const volume = []
        newData.forEach((element) => {
          statDate.push(transformDate(element.date))
          tvl.push(element.tvl)
          volume.push(element.volume)
        })

        this.option1.xAxis[0].data = this.option2.xAxis.data = statDate
        this.option1.series[0].data = tvl
        this.option2.series[0].data = volume

        // 绘制图表
        echarts.init(this.$refs.main1).setOption(this.option1)
        echarts.init(this.$refs.main2).setOption(this.option2)

        alignLeft() // 表格第一列左对齐
      })
    },

    gotoLink() {
      this.$router.push('/qualiQuery')
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

/* /deep/ .el-table td.el-table__cell div {
  display: flex;
  align-items: center;
} */

/deep/ .el-pagination .btn-prev {
  background: transparent !important;
}
/deep/ .el-pagination .btn-next {
  background: transparent !important;
}
/deep/ .el-pager li {
  background: transparent !important;
}
.el-table tr {
  pointer-events: none;
}
</style>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 300px;
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
  row-gap: 16px;
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
.hdNOyW {
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
.icOiVI {
  width: 49%;
}
.bmITCN {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  min-height: 332px;
  border-radius: 16px;
  width: 100%;
  height: 300px;
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  background-color: rgb(25, 27, 31);
  flex-direction: column;
}
.cqwlBw {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  border-radius: 16px;
  padding: 1rem;
  background-color: rgb(25, 27, 31);
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
.kKrqCm {
  box-sizing: border-box;
  margin: 0px 20px 0px 0px;
  min-width: 0px;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: fit-content;
}
.css-kep7b5 {
  box-sizing: border-box;
  margin: 0px 4px 0px 0px;
  min-width: 0px;
  font-weight: 500;
}

.hSTArG {
  font-size: 16px;
  font-weight: 500;
  color: rgb(253, 64, 64);
}
.ksHUsh {
  font-size: 16px;
  font-weight: 500;
  color: rgb(39, 174, 96);
}
.css-tb43nw {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 400;
  color: rgb(252, 7, 125);
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
</style>
