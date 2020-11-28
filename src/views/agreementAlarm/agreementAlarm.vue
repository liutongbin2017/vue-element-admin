<template>
  <div class="setData">
    <div class="setDataTool">
      <el-button type="primary">告警页面</el-button>
      <el-button type="primary" @click="isShowDialog">新增</el-button>
    </div>
    <!-- 展示数据标题 -->
    <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="code" label="编码"></el-table-column>
      <el-table-column prop="alarmCode" label="故障显示码"></el-table-column>
      <el-table-column prop="level" label="级别"></el-table-column>
      <el-table-column prop="describe" label="描述"></el-table-column>
      <el-table-column prop="suggestion" label="建议"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <el-button @click="deleteItem(scope.row)" type="danger" icon="el-icon-delete" circle sizie="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑/新增弹框 -->
    <!-- <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" > -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" v-if="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" style="width: 400px" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="编码" prop="code">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="故障显示码">
          <el-input v-model="form.alarmCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="级别">
          <el-input v-model="form.level" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="describe">
          <el-input v-model="form.describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="建议">
          <el-input v-model="form.suggestion" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogHide">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
module.exports = require('./agreementAlarm.js')
</script>

<style lang="scss" scoped src="./agreementAlarm.scss"></style>