import { getDataList } from '../../api/washApi'

export default {
  data() {
    return {
      input: '',
      options: [
        {
          value: '1',
          label: '波轮'
        },
        {
          value: '2',
          label: '双波轮'
        },
        {
          value: '3',
          label: '滚筒'
        },
        {
          value: '4',
          label: '双滚筒'
        },
        {
          value: '5',
          label: '干衣机'
        }
      ],
      typeValue: '',
      tableData: [
        {
          id: 'C1 HDU85G3	',
          name: '云裳欧式滚筒		',
          nickname: '101c12002400081005010021800067000000f300000000000000000000000000_老协议-未知		',
          num: '卡萨帝	',
          attr: '滚筒		',
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
    handleClick(row) {
      console.log(row)
      this.$router.push({name: 'machineDetailEdit'})
    },
    // 下拉框选择
    handleChangeType() {
      console.log(this.typeValue)
    },
    handleChange() {
      console.log(this.form.type)
    },
    // 程序查看详情
    handleClickPro(row) {
      console.log(row)
      this.$router.push({ name: 'machineDetail' })
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
