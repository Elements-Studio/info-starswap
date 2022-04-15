<template>
  <div class="login-container">
    <el-button type="mini" @click="setSendCmd()">走你</el-button>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import axios from 'axios'
import { getToken, SendCmd } from '@/api/test'

export default {
  name: 'Test',
  data() {
    return {}
  },
  mounted() {
    // this.testLoginApi()
  },
  methods: {
    getUserToken() {
      getToken({
        model: '1',
        UserName: '15001357927',
        Password: 'cycsky123'
      }).then(res => {
        console.log(res)
        debugger
      })
    },

    setSendCmd() {
      SendCmd({
        NodeOID: '11256200001234',
        Content: 'FFAB110702',
        Type: '2'
      }).then(res => {
        console.log(res)
      })
    },
    testLoginApi() {
      axios
        .post('http://ghicmd.gtibee.com/api/SendCmd/post', {
          NodeOID: '11256200001234',
          Content: 'FFAB110702',
          Type: '2'
        })
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss"></style>
