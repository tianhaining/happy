<template lang="html">
  <article class="tableInfo">
    <!-- 表格信息 -->
    <mz-table
      :data="tableInfo"
      style="width: 100%">
      <mz-table-column
        prop="color"
        label="颜色/尺码">
      </mz-table-column>
      <mz-table-column
        label="M">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.m_number" @keyup="changeInput(scope.row.m_number, scope.$index, 'm_number')">
        </template>
      </mz-table-column>
      <mz-table-column
        label="L">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.l_number" @keyup="changeInput(scope.row.l_number, scope.$index, 'l_number')">
        </template>
      </mz-table-column>
      <mz-table-column
        label="s">
        <template slot-scope="scope">
          <input type="text" v-model="scope.row.s_number" @keyup="changeInput(scope.row.s_number, scope.$index, 's_number')">
        </template>
      </mz-table-column>
      <mz-table-column
        prop="row_summary"
        label="小计">
        <template slot-scope="scope">
          {{(Number(scope.row.m_number) + Number(scope.row.l_number) + Number(scope.row.s_number))*100}}
        </template>
      </mz-table-column>
    </mz-table>
    <!-- 统计 -->
    <div class="tableInfo-total">
      <mz-row>
        <mz-col :span="8">总件数：{{totalNumber}}</mz-col>
        <mz-col :span="8">总金额：￥ {{totalMoney}} 元</mz-col>
        <mz-col :span="8"><mz-button plain :disabled="buttonDisState">提交订单</mz-button></mz-col>
      </mz-row>
    </div>
  </article>
</template>

<script>
  import {tableInfoData} from '@/data/index.js'
  export default {
    data() {
      return {
        tableInfo: tableInfoData,//用于页面
        totalNumber: 0,
        totalMoney: 0,
        buttonDisState: true,
        oldTableData: []//用于保存初始数据
      }
    },
    methods: {
      initData(){
        var tableData = [];
        tableInfoData.forEach(item=>{
          var obj = {
            m_number: item.m_number,
            l_number: item.l_number,
            s_number: item.s_number
          };
          tableData.push(obj);
        });
        return tableData;
      },
      setTotalSummary(){
        var tableData = this.tableInfo;
        var totalNumberTem = 0;
        tableData.forEach((item)=>{
          totalNumberTem = totalNumberTem + (Number(item.m_number) + Number(item.l_number) + Number(item.s_number))
        })
        this.totalNumber = totalNumberTem;
        this.totalMoney = totalNumberTem * 100;
        if (this.totalNumber > 0) {
          this.buttonDisState = false;
        }
      },
      changeInput(cellData, index, cellKey){
        //输入数据校验
        if (Number(cellData) < 0) {
          this.tableInfo[index][cellKey] = this.oldTableData[index][cellKey];
          return false;
        }
        if (cellData > this.oldTableData[index][cellKey]) {
          this.tableInfo[index][cellKey] = this.oldTableData[index][cellKey];
          return false;
        }
        if(!/^[-]?[0-9]*\.?[0-9]+(eE?[0-9]+)?$/.test(cellData)){
            this.tableInfo[index][cellKey] = '';
            return false;
        }
        //输入下单量时设置总计
        this.setTotalSummary();
      }
    },
    created(){
      //保存库存数据，用于后期输入时比较
      this.oldTableData = this.initData();
    }
  }
</script>
<style lang="less">
.tableInfo{
  input {
    width: 4rem;
    text-align: center;
  }
  &-total {
    padding: 10px 0px;
  }
  .mz-table th {
    text-align: center;
  }
}
</style>
