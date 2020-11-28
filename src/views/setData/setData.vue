<template>
  <div class="box">
    <div class="boxTool">
      <el-input v-model="input" clearable placeholder="请输入名称"></el-input>
      <el-select v-model="typeValue" placeholder="请选择机型">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-select v-model="attrValue" placeholder="请选择属性类型">
        <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-button type="primary" @click="findTable">查询</el-button>
      <el-button type="primary" @click="addAttr">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" stripe border max-height="650px">
      <el-table-column prop="itemNumberId" label="id" width="auto"> </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="alias" label="昵称"> </el-table-column>
      <el-table-column prop="number" label="序号"> </el-table-column>
      <el-table-column prop="type" label="支持机型" width="auto"> </el-table-column>
      <el-table-column prop="category" label="属性类型"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageination">
      <el-pagination layout="prev, pager, next" @current-change="currentClick" :total="totalPage"> </el-pagination>
    </div>

    <el-dialog v-if="dialogFormVisible" :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" style="width:400px" label-width="120px">
        <el-input style="display:none" v-model="form.id"></el-input>
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序号" prop="num">
          <el-input v-model="form.num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支持洗衣机类型" prop="type">
          <el-checkbox-group v-model="form.type" @change="handleChange">
            <el-checkbox label="1">波轮</el-checkbox>
            <el-checkbox label="2">滚筒</el-checkbox>
            <el-checkbox label="4">干衣机</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="属性类型" prop="attr">
          <el-select v-model="form.attr">
            <el-option :label="item.label" :value="item.value" v-for="(item, index) in categoryOptions" :key="index"></el-option>
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
module.exports = require('./setData.js')
</script>

<style lang="scss" scoped src="./setData.scss"></style>
