export default {
  data() {
    return {
      form: {
        name: '',
        type: []
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      typeValue: '',
      dialogFormVisible: false,
      proData: [
        {
          id: 1,
          name: '11',
          code: '111',
          defayltValue: '1'
        },
        {
          id: 1,
          name: '11',
          code: '111',
          defayltValue: '1'
        },
        {
          id: 1,
          name: '11',
          code: '111',
          defayltValue: '1'
        },
        {
          id: 1,
          name: '11',
          code: '111',
          defayltValue: '1'
        },
        {
          id: 2,
          name: '22',
          code: '222',
          defayltValue: '2'
        }
      ],
      dialogForm: {
        name: '',
        attr: '',
        nickname: '',
        num: '',
        type: [],
        syncPro: ''
      },
      rules: {}, // 表单验证规则
      tableName: '',
      tableData: [
        {
          name: '1',
          code: '2',
          value: '3'
        }
      ]
    }
  },
  methods: {
    // 下拉框选择
    handleChangeType() {
      console.log(this.typeValue)
    },
    handleClick(row) {
      console.log(row)
      this.dialogFormVisible = true
      // 获取当前行在proData中的index
      let currentIndex = this.proData.findIndex(item => item.id === row.id)
      this.form.name = this.proData[currentIndex].name
      this.form.id = this.proData[currentIndex].id
    },
    // 弹框表格变化
    handleClickDialog(row) {
      console.log(row)
      this.dialogFormVisible = true
    },
    handleChange() {
      console.log(this.form.type)
    },
    // 隐藏dialog
    dialogHide() {
      this.dialogFormVisible = false
    },
    submitForm(formName) {}
  }
}
