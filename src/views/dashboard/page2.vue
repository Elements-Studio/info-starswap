<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <router-link :to="{path:'page1'}">page1</router-link> |
    <router-link :to="{path:'page2'}">page2</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      name: '这是第二页'
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
</style>
