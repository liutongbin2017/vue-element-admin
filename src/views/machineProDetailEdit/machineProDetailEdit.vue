<template>
  <div class="box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Type ID">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="型号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="编号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="code">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="程序编号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="图片名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="程序洗涤完成时间" label-width="150px">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="类型">
            <el-select v-model="typeValue" placeholder="程序分类" @change="handleChangeType">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="组命令">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="标签属性">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="本机程序" name="type"></el-checkbox>
            <el-checkbox label="是否可调" name="type"></el-checkbox>
            <el-checkbox label="洗完烘干" name="type"></el-checkbox>
            <el-checkbox label="洗完抖散" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <el-button type="primary" class="addBtn">新增命令</el-button>
    <!-- 程序命令 -->
    <el-table :data="proData" style="width: 100%" max-height="350">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="code" label="code"> </el-table-column>

      <el-table-column prop="defaultValue" label="默认值"> </el-table-column>
      <el-table-column prop="step" label="下限~上限(步长)"> </el-table-column>
      <el-table-column prop="address" label="单位"> </el-table-column>
      <el-table-column prop="address" label="是否可调"> </el-table-column>
      <el-table-column prop="address" label="是否关闭"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
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
    <div class="btn">
      <el-button type="primary">提交</el-button>
    </div>
    <el-dialog title="编辑命令" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" :rules="rules" ref="form" style="width:450px" label-width="auto">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="编号">
              <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="名称">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="是否同步到其他程序">
              <el-select v-model="form.syncPro" placeholder="请选择">
                <el-option label="是" value="1"> </el-option>
                <el-option label="否" value="0"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="APP显示名称" prop="nickname">
              <el-input v-model="form.nickname" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="值类型" prop="nickname">
              <el-select v-model="form.syncPro" placeholder="请选择">
                <el-option label="枚举" value="1"> </el-option>
                <el-option label="数值" value="0"> </el-option>
                <el-option label="布尔" value="2"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否可调" prop="nickname">
              <el-select v-model="form.syncPro" placeholder="请选择">
                <el-option label="是" value="1"> </el-option>
                <el-option label="否" value="0"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="默认值" prop="nickname">
              <el-input v-model="form.nickname" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位" prop="nickname">
              <el-input v-model="form.nickname" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="tableName" autocomplete="off" placeholder="名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="tableName" autocomplete="off" placeholder="code"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="tableName" autocomplete="off" placeholder="value"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button>添加</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column prop="name" label="名称" width="180"> </el-table-column>
        <el-table-column prop="code" label="code" width="180"> </el-table-column>
        <el-table-column prop="value" label="value"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
              <el-button @click="handleClickDialog(scope.row)" type="danger" icon="el-icon-delete-solid" circle size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogHide">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
module.exports = require('./machineProDetailEdit.js')
</script>

<style lang="scss" scoped src="./machineProDetailEdit.scss"></style>
