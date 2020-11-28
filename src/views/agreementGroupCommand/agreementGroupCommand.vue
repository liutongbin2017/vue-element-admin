<template>
  <div class="setData">
    <div class="setDataTool">
      <el-button type="primary">组命令页面</el-button>
      <el-button type="primary" @click="createItem">新增</el-button>
    </div>
    <!-- 展示数据标题 -->
    <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="name" label="组名称"></el-table-column>
      <el-table-column prop="key" label="组key"></el-table-column>
      <el-table-column prop="unit" label="所属筒"></el-table-column>
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
    <!-- 穿梭框 -->
    <el-dialog :title="dialogTitleNew" :visible.sync="isShowNewDialog">
      <el-transfer v-model="value1" :data="data1"></el-transfer>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogHide">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑弹框 -->
    <el-dialog :title="dialogTitleEdit" :visible.sync="dialogFormVisible" v-if="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" style="width: 400px" label-width="120px">
        <el-form-item label="组名称" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="组key" prop="key"> 
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属筒" prop="unit">
          <el-input v-model="form.unit" autocomplete="off"></el-input>
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
module.exports = require('./agreementGroupCommand.js')
</script>

<style lang="scss" scoped src="./agreementGroupCommand.scss"></style>