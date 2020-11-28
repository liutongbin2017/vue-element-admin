<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="input" clearable placeholder="按型号或者typeId查询"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%;margin-top:20px">
      <el-table-column fixed prop="typeid" label="TypeId"> </el-table-column>
      <el-table-column fixed prop="typeid" label="型号"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
module.exports = require('./cardProList.js')
</script>

<style lang="scss" scoped src="./cardProList.scss"></style>
