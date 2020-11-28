<template>
  <div class="machineDetail">
    <div class="searchBar">
      <el-select v-model="typeValue" placeholder="筒编号" @change="handleChangeType">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-select v-model="typeValue" placeholder="分区编号" @change="handleChangeType">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-select v-model="typeValue" placeholder="程序分类" @change="handleChangeType">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" stripe border @row-click="handleRowClick">
      <el-table-column prop="id" label="程序名称" width="180"> </el-table-column>
      <el-table-column prop="name" label="图片" width="180"> </el-table-column>
      <el-table-column prop="nickname" label="洗涤时间"> </el-table-column>
      <el-table-column prop="num" label="筒位置"> </el-table-column>
      <el-table-column prop="type" label="是否是本机程序"> </el-table-column>
      <el-table-column prop="type" label="抖散"> </el-table-column>
      <el-table-column prop="type" label="烘干"> </el-table-column>
      <el-table-column prop="type" label="组命令"> </el-table-column>
      <el-table-column prop="attr" label="属性类型"> </el-table-column>
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
    <!-- 程序详情 -->
    <el-table :data="proData" style="width: 100%">
      <el-table-column prop="date" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="address" label="code"> </el-table-column>

      <el-table-column prop="address" label="默认值"> </el-table-column>
      <el-table-column prop="address" label="下限~上限(步长)"> </el-table-column>
      <el-table-column prop="address" label="单位"> </el-table-column>
      <el-table-column prop="address" label="是否可调"> </el-table-column>
      <el-table-column prop="address" label="是否关闭"> </el-table-column>
    </el-table>
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
module.exports = require('./machineDetail.js')
</script>

<style lang="scss" scoped src="./machineDetail.scss"></style>
