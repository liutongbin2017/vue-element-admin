<template>
  <div>
    <el-dialog :title="formConfig.formTitle" :visible.sync="dialogFormVisible" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false">
      <el-form :model="form" label-width="auto">
        <el-row :gutter="20">
          <el-col :span="12" v-for="(item, index) in formConfig.formData" :key="index">
            <el-form-item :label="item.name">
              <el-input v-if="item.type === 'Input'" :disabled="item.isDisabled" v-model="form[item.key]" autocomplete="off"></el-input>
              <el-select v-else-if="item.type === 'Select'" v-model="form[item.key]" placeholder="请选择">
                <el-option :label="option.label" :value="option.value" v-for="(option, index) in item.options" :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="formConfig.formTableData" style="width: 100%" @selection-change="selectTable">
        <el-table-column v-if="formConfig.tableCheck" type="selection"> </el-table-column>
        <el-table-column :prop="item.value" :label="item.label" v-for="(item, index) in formConfig.formTableSet" :key="index"> </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClickCancel">取 消</el-button>
        <el-button type="primary" @click="handleClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      selectArray: []
    }
  },
  props: {
    formConfig: {
      type: Object
    },
    dialogFormVisible: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {
    handleClick() {
      let data = {
        form: this.form,
        selectArray: this.selectArray
      }
      this.$emit('dialogConfirm', data)
      console.log(this.formConfig)
    },
    handleClickCancel() {
      this.$emit('handleClickCancel')
    },
    selectTable(val) {
      this.selectArray = val
      this.$emit('selectionChangeTable', val)
    }
  },
  watch: {
    formConfig(val) {
      this.formConfig.formData.forEach(item => {
        this.form[item.key] = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
