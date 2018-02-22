<template lang="html">
  <article class="baseInfo">
    <mz-row>
      <mz-col :span="4">title：</mz-col>
      <mz-col :span="6">{{baseInfo.title}}</mz-col>
    </mz-row>
    <mz-row>
      <mz-col :span="4">price：</mz-col>
      <mz-col :span="6">￥{{baseInfo.price}}元</mz-col>
    </mz-row>
    <mz-row>
      <mz-col :span="4">goodsno：</mz-col>
      <mz-col :span="6">{{baseInfo.goodsNo}}</mz-col>
    </mz-row>
    <mz-row>
      <mz-col :span="4">brand：</mz-col>
      <mz-col :span="6">{{baseInfo.brand}}</mz-col>
    </mz-row>
  </article>
</template>

<script>
import {baseInfoData} from '@/data/index.js'
export default {
  name: 'baseInfo',
  data(){
    return {
      baseInfo: baseInfoData
    }
  }
}
</script>
<style lang="less">
.baseInfo {
  padding: 1rem 2rem;
  div {
    text-align: left;
    padding: .1rem 0;
  }
}
</style>
