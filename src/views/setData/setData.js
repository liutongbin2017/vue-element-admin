import { getDataList, saveData } from '../../api/washApi'

export default {
  data() {
    return {
      input: '',
      categoryOptions: [
        {
          value: 1,
          label: '洗衣机属性'
        },
        {
          value: 2,
          label: '筒属性'
        },
        {
          value: 3,
          label: '附加功能'
        },
        {
          value: 4,
          label: '程序名称'
        }
      ],
      typeOptions: [
        {
          value: 1,
          label: '波轮'
        },
        {
          value: 2,
          label: '滚筒'
        },
        {
          value: 4,
          label: '干衣机'
        }
      ],
      typeValue: null,
      attrValue: null,
      tableData: [],
      totalPage: null, // 分页页数
      dialogFormVisible: false,
      form: {
        name: '',
        attr: '',
        nickname: '',
        num: '',
        type: []
      },
      rules: {
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        attr: [{ required: true, message: '请选择属性', trigger: 'blur' }],
        num: [{ required: true, message: '请输入序号', trigger: 'blur' }],
        type: [{ required: true, message: '请选择机型', trigger: 'blur' }]
      }, // 表单验证规则
      dialogTitle: '新增属性'
    }
  },
  methods: {
    // 点击新增属性
    addAttr() {
      this.dialogFormVisible = true
      this.dialogTitle = '新增属性'
    },
    handleClick(row) {
      console.log(row)
      let typeData = null
      switch (row.type) {
        case '波轮':
          typeData = ['1']
          break
        case '滚筒':
          typeData = ['2']
          break
        case '干衣机':
          typeData = ['4']
          break
        case '波轮/滚筒':
          typeData = ['1', '2']
          break
        case '波轮/干衣机':
          typeData = ['1', '4']
          break
        case '滚筒/干衣机':
          typeData = ['2', '4']
          break
        case '波轮/滚筒/干衣机':
          typeData = ['1', '2', '4']
          break
      }
      let attrData = null
      switch (row.category) {
        case '洗衣机属性':
          attrData = 1
          break
        case '筒属性':
          attrData = 2
          break
        case '附加功能':
          attrData = 3
          break
        default:
          attrData = 4
          break
      }
      this.form = {
        id: row.itemNumberId,
        name: row.name,
        nickname: row.alias,
        num: row.number,
        type: typeData,
        attr: attrData
      }
      this.dialogFormVisible = true
    },
    handleChange() {
      console.log(this.form.type)
    },
    // 隐藏dialog
    dialogHide() {
      this.dialogFormVisible = false
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let typeData = 0
          this.form.type.forEach(item => {
            typeData += parseInt(item)
          })
          const data = {
            itemId: this.form.id || '',
            name: this.form.name,
            alias: this.form.nickname,
            number: this.form.num,
            type: typeData,
            category: this.form.attr
          }
          this.saveTableData(data)
          this.dialogFormVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 分页点击
    currentClick(data) {
      this.getTableDataList(data)
    },
    // 点击查询
    findTable() {
      this.getTableDataList(1, this.input, this.typeValue, this.attrValue)
    },
    // 获取数据定义接口数据
    getTableDataList(data, name, type, category) {
      getDataList(data, name, type, category).then(res => {
        console.log(res)
        res.retData.dataList.forEach(item => {
          switch (item.type) {
            case 1:
              item.type = '波轮'
              break
            case 2:
              item.type = '滚筒'
              break
            case 3:
              item.type = '波轮/滚筒'
              break
            case 4:
              item.type = '干衣机'
              break
            case 5:
              item.type = '波轮/干衣机'
              break
            case 6:
              item.type = '滚筒/干衣机'
              break
            default:
              item.type = '波轮/滚筒/干衣机'
          }
          switch (item.category) {
            case 1:
              item.category = '洗衣机属性'
              break
            case 2:
              item.category = '筒属性'
              break
            case 3:
              item.category = '附加功能'
              break
            default:
              item.category = '程序名称'
          }
        })
        this.tableData = res.retData.dataList
        this.totalPage = res.retData.total
      })
    },
    // 保存(新增)数据定义属性接口
    saveTableData(data) {
      saveData(data)
        .then(res => {
          this.$message({ showClose: true, message: '成功', type: 'success' })
          console.log(res)
        })
        .catch(err => {
          console.log('保存数据定义属性接口', err)
        })
    }
  },
  watch: {
    dialogFormVisible(newValue, oldValue) {
      if (newValue === false) {
        // 如果弹框消失的时候就清空表单
        this.form = {
          name: '',
          attr: '',
          nickname: '',
          num: '',
          type: []
        }
      }
    }
  },
  mounted() {
    this.getTableDataList(1)
  }
}
