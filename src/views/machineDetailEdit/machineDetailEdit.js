import TableDialog from '../../components/TableDialog/index.vue'
export default {
  data() {
    return {
      form: {},
      baseDialogVisible: false, // 基本设置弹框
      baseInnerVisible: false,
      baseCode: '',
      baseName: '',
      baseId: '',
      baseDisabled: '',
      tableData: [
        {
          id: '1',
          code: '1',
          name: '王小虎1'
        },
        {
          id: '2',
          code: '2',
          name: '王小虎2'
        },
        {
          id: '3',
          code: '3',
          name: '王小虎3'
        }
      ],
      multipleSelection: [],
      tableConfig: {
        pagination: false, // 是否显示分页
        pageTotal: 1000,
        tableCheck: true, // 是否显示多选框
        tableData: [
          {
            name: '1'
          },
          {
            name: '2'
          }
        ],
        fieldList: [
          { label: '编号', value: 'id' },
          { label: '名称', value: 'name' },
          { label: 'Code', value: 'Code' },
          { label: '下限~上限(步长)', value: 'step' },
          { label: '单位', value: 'danwei' },
          { label: '是否可调', value: 'set' },
          { label: '是否关闭', value: 'isoff' }
        ]
      },
      formConfig: {
        formTitle: '编辑命令',
        tableCheck: true,
        formTableData: [
          {
            name: '1',
            code: '1',
            value: '1'
          },
          {
            name: '2',
            code: '2',
            value: '2'
          }
        ],
        formTableSet: [
          {
            label: 'name',
            value: 'name'
          },
          {
            label: 'code',
            value: 'code'
          },
          {
            label: 'value',
            value: 'value'
          }
        ],
        formData: [
          {
            key: 'a', // 对应数据源的key值
            type: 'Input',
            name: '输入框'
          },
          {
            key: 'b',
            type: 'Select',
            name: '下拉框',
            options: [
              {
                label: '下1',
                value: '1'
              },
              {
                label: '下2',
                value: '2'
              }
            ]
          }
        ]
      },
      // 筒功能设置表单
      bootFunForm: {
        name: '',
        value: '',
        areas: []
      },
      // 筒程序设置表单
      bootProForm: {
        code: '',
        groupCommand:''
      }
    }
  },
  components: {
    TableDialog
  },
  methods: {
    menuProClick(item) {
      console.log(item)
    },
    //分区信息点击添加
    handleAreaInfo() {
      this.bootFunForm.areas.push({
        value: '',
        desc: ''
      })
    },
    removeArea(item) {
      var index = this.bootFunForm.areas.indexOf(item)
      if (index !== -1) {
        this.bootFunForm.areas.splice(index, 1)
      }
    },
    showDialogTable(data) {
      // console.log('点击弹窗的表格的值', data);
    },
    currentClick(data) {
      console.log('分页点击当前', data)
    },
    dialogConfirm(data) {
      console.log('这是子组件1传过来的', data)
    },
    selectionChange(data) {
      console.log('从子组件传递过来的', data)
    },
    handleAddType() {
      this.baseDialogVisible = true
    },
    // 基本设置选择开关属性弹框的多选功能
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    // 渲染打开内层弹框的数据
    handleBseClick(row) {
      this.baseInnerVisible = true
      console.log(row)
      this.baseCode = row.code
      this.baseName = row.name
      this.baseId = row.id
      this.baseDisabled = true
    },
    // 点击内层弹框修改的数据同步到外层弹窗的表格
    handleBaseInner() {
      if (this.baseDisabled === true) {
        this.tableData.forEach(item => {
          if (item.id === this.baseId) {
            item.name = this.baseName
            item.code = this.baseCode
          }
        })
      } else {
        this.tableData.push({
          name: this.baseName,
          code: this.baseCode
        })
      }

      this.baseInnerVisible = false
    },
    handleBaseAdd() {
      this.baseId = ''
      this.baseCode = ''
      this.baseName = ''
      this.baseDisabled = false
      this.baseInnerVisible = true
    }
  }
}
