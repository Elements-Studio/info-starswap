<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <router-link :to="{ path: 'page1' }">page1</router-link>
    |
    <router-link :to="{ path: 'page2' }">page1</router-link>
    {{ resData }}
    <el-button @click="updateChart()">更新</el-button>
    <el-button @click="category()">更新</el-button>

    <div ref="main1" class="echarts" />
  </div>
</template>

<script>
// import { getToken } from '@/utils/auth'
import { subAudit, auditList } from '@/api/page'
import axios from 'axios'
import * as echarts from 'echarts'
export default {
  name: 'Page',
  data() {
    return {
      name: '这是第一页',
      resData: [0],
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    }
  },
  mounted() {
    echarts.init(this.$refs.main1).setOption(this.option)

    // window.addEventListener('resize', () => {
    //   console.log(11)
    //   echarts.resize()
    // })

    // this.getList()
    // this.setSubAudit()
    // this.getAuditList()

    this.mainSeed()
    this.swapApi()
  },
  methods: {
    // getList() {
    //   axios.post('http://172.20.22.189:8021/api/sys/user/list', {}, {
    //     headers: {
    //       Authorization: 'Bearer ' + getToken()
    //     }
    //   }).then((res) => {
    //     console.log(res)
    //     this.resData = res
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // },
    mainSeed() {
      axios
        .post('https://main-seed.starcoin.org', {
          method: 'chain.id',
          params: [],
          id: 42,
          jsonrpc: '2.0'
        })
        .then((res) => {
          console.log(11, res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    swapApi() {
      axios
        .post('https://swap-api.starcoin.org/main/v1/getTokenPairReservesList', [['0x00000000000000000000000000000001::STC::STC', '0x8c109349c6bd91411d6bc962e080c4a3::STAR::STAR']])
        .then((res) => {
          console.log(22, res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setSubAudit() {
      const param = {
        id: 1,
        auditResult: 1,
        auditContent: '测试通过该'
      }
      subAudit(param).then((res) => {
        console.log(res)
      })
    },
    getAuditList() {
      auditList({}).then((res) => {
        console.log(res)
        this.resData = res.list
      })
    },
    updateChart() {
      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      }

      echarts.init(this.$refs.main1).setOption(option)
    },
    category() {
      echarts.init(this.$refs.main1).setOption(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.echarts {
  width: 100%;
  height: 320px;
}
</style>
