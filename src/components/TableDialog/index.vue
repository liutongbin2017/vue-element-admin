<template>
  <div>
    <el-table ref="multipleTable" :data="tableConfig.tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column v-if="tableConfig.tableCheck" type="selection" width="55"> </el-table-column>
      <el-table-column v-for="(item, index) in tableConfig.fieldList" :prop="item.value" :label="item.label" :key="index"> </el-table-column>
      <el-table-column v-if="tableConfig.operation" fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top-start">
            <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="tableConfig.pagination" style="text-align:center;margin-top:10px;" layout="prev, pager, next" :total="tableConfig.pageTotal" @current-change="currentClick"> </el-pagination>
    <OrderDialog v-if="tableConfig.displayForm" :formConfig="formConfig" @dialogConfirm="handleConfirm" :dialogFormVisible="dialogFormVisible" @handleClickCancel="handleClickCancel" @selectionChangeTable="selectionChangeTable"></OrderDialog>
  </div>
</template>

<script>
import OrderDialog from '../../components/OrderDialog'
export default {
  data() {
    return {
      multipleSelection: [],
      dialogFormVisible: false
    }
  },
  components: {
    OrderDialog
  },
  props: {
    tableConfig: {
      type: Object
    },
    formConfig: {
      type: Object
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('selectionChange', val)
    },
    selectionChangeTable(data) {
      this.$emit('selectDialogTable', data)
    },
    handleClick(row) {
      console.log(row)
      this.dialogFormVisible = true
    },
    handleConfirm(data) {
      console.log('这是子组件2传过来', data)
      this.$emit('dialogConfirm', data)
      this.dialogFormVisible = false
    },
    currentClick(data) {
      this.$emit('currentClick', `点击了${data}`)
    },
    handleClickCancel() {
      this.dialogFormVisible = false
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped></style>
