import { getDataList } from '../../api/washApi'

export default {
  data() {
    return {
      input: '',
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
      attrValue: '',
      tableData: [
        {
          id: '1',
          name: '停止报警	',
          nickname: '停止报警	',
          num: '1',
          attr: '洗衣机属性	',
          type: '波轮 滚筒 干衣机'
        },
        {
          id: '2',
          name: '停止报警	',
          nickname: '停止报警	',
          num: '1',
          attr: '洗衣机属性	',
          type: '波轮 滚筒 干衣机'
        },
        {
          id: '3',
          name: '停止报警	',
          nickname: '停止报警	',
          num: '1',
          attr: '洗衣机属性	',
          type: '波轮 滚筒 干衣机'
        },
        {
          id: '3',
          name: '停止报警	',
          nickname: '停止报警	',
          num: '1',
          attr: '洗衣机属性	',
          type: '波轮 滚筒 干衣机'
        }
      ],
      proData: [
        {
          date: '2'
        }
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        attr: '',
        nickname: '',
        num: '',
        type: []
      },
      rules: {
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }]
      }, // 表单验证规则
      dialogTitle: '新增属性'
    }
  },
  methods: {
    // 点击表格的一行,然后重新渲染proData
    handleRowClick(row) {
      console.log(row)
      const data = [
        {
          date: '3'
        }
      ]
      this.proData = data
    },
    // 下拉框选择
    handleChangeType() {
      console.log(this.typeValue)
    },
    handleClick(row) {
      console.log(row)
      this.$router.push({name: 'machineProDetailEdit'})
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
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
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
  mounted() {}
}
