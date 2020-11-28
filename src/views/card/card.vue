<template>
  <div class="box">
    <div class="boxTool">
      <el-input v-model="input" clearable placeholder="请输入名称"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">根据typeId批量复制</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="" label="logo" width="70">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" width="50" height="50" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="large logo"> </el-table-column>
      <el-table-column prop="address" label="名称"> </el-table-column>
      <el-table-column prop="address" label="下载量"> </el-table-column>
      <el-table-column prop="address" label="使用次数"> </el-table-column>
      <el-table-column prop="address" label="筛选"> </el-table-column>
      <el-table-column prop="address" label="使用建议"> </el-table-column>
      <el-table-column prop="address" label="描述"> </el-table-column>
      <el-table-column prop="attr" label="自适配程序" width="80">
        <template slot-scope="scope">
          <el-button @click="handleClickPro(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button @click="handleEditClick(scope.row)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <el-button type="danger" icon="el-icon-delete-solid" circle size="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    <el-dialog title="编辑命令" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="auto">
        <el-form-item label="logo">
          <img :src="tableData[0].img" alt="" width="50" height="50" />
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :multiple="false" :limit="1" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="large logo">
          <img :src="tableData[0].img" alt="" width="50" height="50" />
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :multiple="false" :limit="1" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="下载量">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="使用建议">
          <el-input type="textarea" :rows="2" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :rows="2" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
module.exports = require('./card.js')
</script>

<style lang="scss" scoped src="./card.scss"></style>
