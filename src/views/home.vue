<template lang="html">
  <div class="home">
    <!-- 头部 -->
    <header-bar></header-bar>
    <!-- 内容 -->
    <section class="">
      <!-- 基本信息 -->
      <base-info></base-info>
      <!-- 表格信息 -->
      <table-info></table-info>
    </section>
  </div>
</template>

<script>
import headerBar from '@/components/headerBar'
import baseInfo from '@/components/baseInfo'
import tableInfo from '@/components/tableInfo'
export default {
  name: 'home',
  components: {
    headerBar,
    baseInfo,
    tableInfo
  }
}
</script>

<style lang="less">
  .home {
    width: 40rem;
    margin: 0 auto;
  }
</style>
