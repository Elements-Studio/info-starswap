<template>
  <div class="dUjLmT">
    <div class="jHUClt">
      <a class="dUhcvK active" href="#/" aria-current="page">
        <div class="sc-ibxdXY jvqtxp">
          <img height="32px" :src="require('../assets/logo.png')" alt="logo" style="display: flex" />
        </div>
      </a>
      <div class="dcYJON">
        <a class="bYxUGR" v-for="(item, index) in tabs" :key="index" :class="{ ACTIVE: index == tabsIndex }" :href="item.router" @click="tabSwitch(index)">{{ item.name }}</a>
        <!-- <a id="pool-nav-link" class="bYxUGR ACTIVE" href="#/home">Overview</a>
        <a id="stake-nav-link" class="bYxUGR" href="#/pools">Pools</a>
        <a id="stake-nav-link" class="bYxUGR" href="#/tokens">Tokens</a> -->
      </div>
    </div>
    <div class="elhjpH">
      <div class="sc-cIShpX cgTRve">
        <div class="sc-jKJlTe sc-hMqMXs sc-kafWEX jxEzql">
          <input type="text" placeholder="Search pools or tokens" class="sc-feJyhm eveKoa" value="" />
          <div class="sc-chPdSV jpxwCK css-wz3k0m">⌘/</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      tabs: [
        { name: 'Overview', router: '#/home' },
        { name: 'Pools', router: '#/pools' },
        { name: 'Tokens', router: '#/tokens' }
      ],
      tabsIndex: 0,
      date: ''
    }
  },
  mounted() {
    console.log(this.$route.path)
    if (this.$route.path === '/home') this.tabsIndex = 0
    if (this.$route.path === '/pools' || this.$route.path === '/poolsDetail') this.tabsIndex = 1
    if (this.$route.path === '/tokens' || this.$route.path === '/tokensDetail') this.tabsIndex = 2
  },
  methods: {
    tabSwitch(index) {
      this.tabsIndex = index
      console.log(this.tabsIndex)
    }
  }
}
</script>

<style lang="scss">
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
.elhjpH {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  justify-self: flex-end;
}
.cgTRve {
  position: relative;
  z-index: 30;
  width: 100%;
}
.jxEzql {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  background-color: rgb(0, 0, 0);
  padding: 10px 16px;
  width: 500px;
  height: 38px;
  border-radius: 20px;
  z-index: 9999;
}
.eveKoa {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  background: none;
  border: none;
  width: 100%;
  font-size: 16px;
  outline: none;
  color: rgb(255, 255, 255);
}
.css-wz3k0m {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  padding-left: 2px;
}
.jpxwCK {
  color: rgb(64, 68, 79);
}
</style>
