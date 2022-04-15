<template>
  <div class="">
    <div class="bGNJgd" />
    <Header />
    <div class="eqcyAL">
      <div class="knkUAB">
        <div class="cyNANi" />
        <div class="klmLHi">
          <div class="jOqbNQ css-r99fas">All Tokens</div>
          <TokenList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../../src/components/header'
import TokenList from '../../../src/components/tokenList'
export default {
  name: 'Tokens',
  components: { Header, TokenList },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
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
.lr10 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 10px;
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
.css-9p76rv {
  box-sizing: border-box;
  margin: 0px 0px 0px 8px;
  min-width: 0px;
  font-weight: 500;
  color: rgb(108, 114, 132);
}
.dsySXo {
  box-sizing: border-box;
  margin: 0px 0px 0px 10px;
  min-width: 0px;
  font-size: 14px;
  width: fit-content;
  border-radius: 8px;
  background: rgb(64, 68, 79);
  color: rgb(255, 255, 255);
  padding: 0px 5px;
  font-weight: 400;
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
.iJZiMq {
  color: #8a9fe0;
}
.iJZiMq:hover {
  color: #1c4bde;
}
</style>
