<template>
  <div class="setData">
    <!-- 页面头部 -->
    <div class="setDataTool">
      <el-button type="primary">标签页面</el-button>
      <el-button type="primary" @click="isShowNewDialog" v-if="ifNew">新增</el-button>
      <el-button type="primary" @click="connect" v-if="ifConnect">关联</el-button>
    </div>
    <!-- 页面内容 -->
    <div class="content">
      <!-- 标签列表 -->
      <div class="label">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span style="color: blue" @click="showAllCards">全部</span>
                </template>
                <el-submenu index="1-1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span style="color: blue">季节</span>
                  </template>
                  <el-menu-item index="1-1-1" @click="season">四季通用</el-menu-item>
                  <el-menu-item index="1-1-2" @click="season">夏季</el-menu-item>
                  <el-menu-item index="1-1-3" @click="season">冬季</el-menu-item>
                  <el-menu-item index="1-1-3" @click="season">春秋季</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span style="color: blue">衣物类型</span>
                  </template>
                  <el-menu-item index="1-2-1">衬衫</el-menu-item>
                  <el-menu-item index="1-2-2">外套</el-menu-item>
                  <el-menu-item index="1-2-3">内衣</el-menu-item>
                  <el-menu-item index="1-2-3">运动服</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <!-- 数据列表 -->
      <div class="data">
        <el-table :data="washCardData" style="width: 100%" stripe border>
          <el-table-column prop="logo" label="logo"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="washTime" label="洗衣时长"></el-table-column>
          <el-table-column prop="downLoadTimes" label="下载量"></el-table-column>
          <el-table-column prop="suggestion" label="使用建议"></el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 新增弹框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" v-if="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" style="width: 400px" label-width="120px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogHide">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 穿梭框 -->
    <el-dialog :title="connectDialogTitle" :visible.sync="isShowConnectDialog">
      <el-transfer v-model="value1" :data="data1"></el-transfer>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogHide">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
module.exports = require('./cardLabel.js')
</script>

<style lang="scss" scoped src="./cardLabel.scss"></style>