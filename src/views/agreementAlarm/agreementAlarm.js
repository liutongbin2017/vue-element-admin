export default {
  name: '',
  data() {
    return {
      // input: '',
      // typeValue: '',
      // attrValue: '',
      tableData: [{
          name: '报警解除1',
          code: 666666,
          alarmCode: 'F',
          level: '警告',
          describe: '电路故障',
          suggestion: '请关机断水断电，联系维修人员'
        },
        {
          name: '报警解除2',
          code: 666666,
          alarmCode: 'F',
          level: '警告',
          describe: '电路故障',
          suggestion: '请关机断水断电，联系维修人员'
        },
        {
          name: '报警解除3',
          code: 666666,
          alarmCode: 'F',
          level: '警告',
          describe: '电路故障',
          suggestion: '请关机断水断电，联系维修人员'
        }
      ],
      dialogFormVisible: false,
      // 编辑/新增弹框中的内容
      form: {
        name: '',
        code: '',
        alarmCode: '',
        level: '',
        describe: '',
        suggestion: '',
      },
      rules: {
        code: [{
          required: true,
          message: '请输入编码',
          trigger: 'blur'
        }],
        describe: [{
          required: true,
          message: '请输入描述',
          trigger: 'blur'
        }]
      }, // 表单验证规则
      dialogTitle: '新增属性'
    }
  },
  methods: {
    deleteItem() {
      console.log('告警-删除');
    },
    isShowDialog() {
      this.dialogFormVisible = true;
      this.dialogTitle = '新增属性';
    },
    handleClick(row) {
      console.log(row)
      this.form = {
        name: row.name,
        code: row.code,
        alarmCode: row.alarmCode,
        level: row.level,
        describe: row.describe,
        suggestion: row.suggestion,
      }
      this.dialogFormVisible = true;
      this.dialogTitle = '编辑属性';
    },
    // 隐藏dialog
    dialogHide() {
      this.dialogFormVisible = false
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
          this.dialogFormVisible=false;
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
        this.form = {};
      }
    }
  }
}
