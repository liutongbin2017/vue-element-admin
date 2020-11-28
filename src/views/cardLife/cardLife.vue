<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="desc" label="描述" width="180"> </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" width="50" height="50" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button @click="handleEditClick(scope.row)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="关联" placement="top-start">
            <el-button
              @click="handleContactClick(scope.row)"
              type="success"
              icon="el-icon-paperclip
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
    <!-- 编辑弹窗 -->
    <el-dialog title="编辑命令" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="auto">
        <el-form-item label="logo">
          <img :src="tableData[0].img" alt="" width="50" height="50" />
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :multiple="false" :limit="1" :on-exceed="handleExceed" :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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
    <!-- 关联弹窗 -->
    <el-dialog title="关联" :visible.sync="dialogVisible">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="input" clearable placeholder="按名称或者描述查询"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
      <el-table :data="contactData" style="margin-top:10px" max-height="300">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="名称">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
module.exports = require('./cardLife.js')
</script>

<style lang="scss" scoped src="./cardLife.scss"></style>
