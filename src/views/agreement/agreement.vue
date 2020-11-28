<template>
  <div class="setData">
    <!-- 查询/新增栏目 -->
    <div class="setDataTool">
      <el-input v-model="input" clearable placeholder="请输入名称"></el-input>
      <el-button type="primary" @click="searchClick()">查询</el-button>
    </div>
    <!-- 展示数据标题 -->
    <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="type" label="类型" width="150px"> </el-table-column>
      <el-table-column fixed="right" label="告警">
        <template slot-scope="scope">
          <el-button @click="alarmDetail(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="组命令">
        <template slot-scope="scope">
          <el-button @click="groupCommandDetail(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="WashSetting(scope.row)" type="text" size="small">查看</el-button>
          <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <el-button @click="deleteItem(scope.row)" type="danger" icon="el-icon-delete" circle sizie="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
module.exports = require('./agreement.js')
</script>

<style lang="scss" scoped src="./agreement.scss"></style>