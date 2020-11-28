<template>
  <div class="setData">
    <div class="setDataTool">
      <el-button type="primary">洗衣机详细设置页面</el-button>
    </div>
    <!-- 基本设置 -->
    <div class="baseSettings">
      <h4>基本设置</h4>
      <el-form :inline="false" :model="baseSetting" class="demo-form-inline" label-width="40px" size="largeF">
        <el-form-item label="名称">
          <el-input v-model="baseSetting.typeId" placeholder="" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="baseSetting.sort" placeholder="" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 洗衣机属性 -->
    <div class="washMachineAttr">
      <h4>洗衣机属性</h4>
      <el-button type="primary" @click="onSubmit" class="new">新增</el-button>
      <el-table :data="washMachineData" style="width: 100%" stripe border>
        <el-table-column prop="num" label="编号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="code" label="code"></el-table-column>
        <el-table-column prop="limit" label="下限~上限(步长)"></el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
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
    </div>
    <!-- 筒属性设置 -->
    <div class="washMachineAttr">
      <h4>洗衣机属性</h4>
      <el-button type="primary" @click="onSubmit" class="new">新增</el-button>
      <el-table :data="unitData" style="width: 100%" stripe border>
        <el-table-column prop="num" label="编号"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="code" label="code"></el-table-column>
        <el-table-column prop="limit" label="下限~上限(步长)"></el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
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
    </div>
    <!-- 展示数据标题 -->
    <!-- <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="code" label="编码"></el-table-column>
      <el-table-column prop="alarmCode" label="故障显示码"></el-table-column>
      <el-table-column prop="level" label="级别"></el-table-column>
      <el-table-column prop="describe" label="描述"></el-table-column>
      <el-table-column prop="suggestion" label="建议"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <!-- 编辑弹框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" style="width: 400px" label-width="120px">
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
module.exports = require('./agreementWashSetting.js')
</script>

<style lang="scss" scoped src="./agreementWashSetting.scss"></style>