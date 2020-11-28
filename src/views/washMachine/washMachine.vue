<template>
  <div class="setData">
    <div class="setDataTool">
      <el-input v-model="input" clearable placeholder="请输入型号 | 系列 | 协议"></el-input>
      <el-select v-model="typeValue" placeholder="请选择" @change="handleChangeType">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="id" label="型号" width="180"> </el-table-column>
      <el-table-column prop="name" label="系列(APP显示名称)" width="180"> </el-table-column>
      <el-table-column prop="nickname" label="协议"> </el-table-column>
      <el-table-column prop="num" label="品牌" width="100"> </el-table-column>
      <el-table-column prop="type" label="类型" width="180"> </el-table-column>
      <el-table-column prop="attr" label="程序" width="80">
        <template slot-scope="scope">
          <el-button @click="handleClickPro(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="复制" placement="top-start">
            <el-button
              @click="handleClick(scope.row)"
              type="success"
              icon="el-icon-document-copy
"
              size="mini"
              circle
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <el-button type="danger" icon="el-icon-delete-solid" circle size="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageination">
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>

    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" style="width:400px" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序号">
          <el-input v-model="form.num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支持洗衣机类型">
          <el-checkbox-group v-model="form.type" @change="handleChange">
            <el-checkbox label="1">波轮</el-checkbox>
            <el-checkbox label="2">滚筒</el-checkbox>
            <el-checkbox label="3">干衣机</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="属性类型">
          <el-select v-model="form.attr">
            <el-option :label="index" :value="index" v-for="(item, index) in 2" :key="index"></el-option>
          </el-select>
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
module.exports = require('./washMachine.js')
</script>

<style lang="scss" scoped src="./washMachine.scss"></style>
