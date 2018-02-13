<template lang="html">
  <mz-table
    :data="tableData"
    style="width: 100%">
    <mz-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </mz-table-column>
    <mz-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <mz-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <mz-tag size="medium">{{ scope.row.name }}</mz-tag>
          </div>
        </mz-popover>
      </template>
    </mz-table-column>
    <mz-table-column label="操作">
      <template slot-scope="scope">
        <mz-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</mz-button>
        <mz-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</mz-button>
      </template>
    </mz-table-column>
  </mz-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
<style lang="less">

</style>
