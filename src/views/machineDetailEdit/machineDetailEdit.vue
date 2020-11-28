<template>
  <div class="box">
    <!-- 基本设置 -->
    <div class="baseSetting">
      <div class="title">基本设置</div>
      <el-divider></el-divider>
      <div>
        <el-form ref="form" :model="form" label-width="auto">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Type ID">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="8位码">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="系列(APP显示名称)">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="型号">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="品牌类型">
                <el-select v-model="form.type" placeholder="请选择">
                  <el-option label="卡萨帝" value="1"> </el-option>
                  <el-option label="海尔" value="0"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="类型">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="绑定类型">
                <el-select v-model="form.type" placeholder="请选择">
                  <el-option label="触屏式" value="1"> </el-option>
                  <el-option label="按键式" value="0"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="标签属性">
                <el-tag class="bindType" v-for="item in 3" :key="item">微信</el-tag>
                <el-tag class="bindType" effect="plain" @click="handleAddType">+</el-tag>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 基本设置选择开关属性弹框 -->
      <el-dialog title="选择开关属性" :visible.sync="baseDialogVisible" width="30%">
        <!-- <el-button style="margin-bottom:10px" @click="handleBaseAdd">新增属性</el-button> -->
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="code">
            <template slot-scope="scope">{{ scope.row.code }}</template>
          </el-table-column>
          <el-table-column prop="name" label="名称"> </el-table-column>
          <!-- <el-table-column label="操作">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
                <el-button @click="handleBseClick(scope.row)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
              </el-tooltip>
            </template>
          </el-table-column> -->
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="baseDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="baseDialogVisible = false">确 定</el-button>
        </span>
        <!-- 内层弹框 -->
        <el-dialog width="30%" title="修改属性" :visible.sync="baseInnerVisible" append-to-body>
          <div style="display:none">{{ baseId }}</div>
          code : <el-input :disabled="baseDisabled" v-model="baseCode"></el-input> 名称 : <el-input v-model="baseName"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="baseInnerVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleBaseInner">确 定</el-button>
          </span>
        </el-dialog>
      </el-dialog>
    </div>
    <el-divider></el-divider>
    <!-- 洗衣机属性设置 -->
    <div class="machineSetting">
      <div class="title">洗衣机属性设置</div>
      <el-divider></el-divider>
      <tableDialog :tableConfig="tableConfig" :formConfig="formConfig" @selectionChange="selectionChange" @dialogConfirm="dialogConfirm" @currentClick="currentClick" @selectDialogTable="showDialogTable"></tableDialog>
    </div>
    <!-- 筒属性设置 -->
    <div class="bootSetting">
      <div class="title">筒属性设置</div>
      <el-divider></el-divider>
      <tableDialog :tableConfig="tableConfig" :formConfig="formConfig" @selectionChange="selectionChange" @dialogConfirm="dialogConfirm" @currentClick="currentClick" @selectDialogTable="showDialogTable"></tableDialog>
    </div>
    <!-- 筒功能设置 -->
    <div class="bootFunSetting">
      <div class="title">筒功能设置</div>
      <el-divider></el-divider>
      <div>
        <el-form :model="bootFunForm" label-width="auto">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="容量">
                <el-input v-model="bootFunForm.name">
                  <el-button slot="append">KG</el-button>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="最高转速">
                <el-select v-model="bootFunForm.value" placeholder="请选择">
                  <el-option v-for="item in 2" :key="item" :label="item" :value="item">
                    <span style="float: left">{{ item }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">10rpm</span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="最高水位">
                <el-select v-model="bootFunForm.value" placeholder="请选择">
                  <el-option v-for="item in 2" :key="item" :label="item" :value="item"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="水电">
                <el-select v-model="bootFunForm.value" placeholder="请选择">
                  <el-option v-for="item in 2" :key="item" :label="item" :value="item"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="标签属性">
                <el-tag class="bindType" v-for="item in 3" :key="item">微信</el-tag>
                <el-tag class="bindType" effect="plain" @click="handleAddType">+</el-tag>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-row>
                <el-col :span="24">
                  <el-form-item label="分区信息">
                    <el-tag class="bindType" effect="plain" @click="handleAreaInfo">+</el-tag>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" v-for="(area, index) in bootFunForm.areas" :key="index">
                <el-col :span="3">
                  <el-form-item :label="'分区' + index"> </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="名称">
                    <el-input v-model="area.value"> </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="描述">
                    <el-input v-model="area.desc"> </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="1">
                  <el-button @click.prevent="removeArea(area)">删除</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <!-- 筒程序设置 -->
    <div class="bootProSetting">
      <div class="title">筒程序设置</div>
      <el-divider></el-divider>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-menu class="el-menu-vertical-demo" background-color="#ffffff" text-color="#666">
            <el-menu-item :index="item.toString()" v-for="item in 3" :key="item" @click="menuProClick(item)">
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="18">
          <!-- 筒程序设置表单 -->
          <el-form ref="bootProForm" :model="form" label-width="auto">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="code">
                  <el-input v-model="bootProForm.code" disabled> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="app显示名称">
                  <el-input v-model="bootProForm.name"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="图片名称">
                  <el-input v-model="bootProForm.name" disabled> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="程序描述">
                  <el-input v-model="bootProForm.name" disabled> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="默认洗涤时间">
                  <el-input v-model="bootProForm.name"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="组命令">
                  <el-select v-model="bootProForm.groupCommand" placeholder="请选择">
                    <el-option v-for="item in 2" :key="item" :label="item" :value="item"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="分区">
                  <el-select v-model="bootProForm.areas" placeholder="请选择">
                    <el-option v-for="item in 2" :key="item" :label="item" :value="item"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <!-- 筒程序设置表格 -->
          <tableDialog :tableConfig="tableConfig" :formConfig="formConfig" @selectionChange="selectionChange" @dialogConfirm="dialogConfirm" @currentClick="currentClick" @selectDialogTable="showDialogTable"></tableDialog>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
module.exports = require('./machineDetailEdit.js')
</script>

<style lang="scss" scoped src="./machineDetailEdit.scss"></style>
