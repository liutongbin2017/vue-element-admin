export default {
    name: '',
    data() {
      return {
        input: '',
        baseSetting: {
          typeId: '123012930918212903891',
          sort: '滚筒'
        },
        typeValue: '',
        attrValue: '',
        washMachineData: [
          {
            num:6,
            name: '停止报警(停止报警)',
            code:'2000ZX',
            limit:'100~200(1)',
            unit:'分钟',
          },
          {
            num:66,
            name: '停止报警(停止报警)',
            code:'2000ZX',
            limit:'100~200(1)',
            unit:'分钟',
          },
          {
            num:66,
            name: '停止报警(停止报警)',
            code:'2000ZX',
            alarmCode:'F',
            limit:'100~200(1)',
            unit:'分钟',
          }
        ],
        unitData: [
          {
            num:1,
            name: '停止报警(停止报警)',
            code:'2000ZX',
            limit:'-',
            unit:'分钟',
          },
          {
            num:61,
            name: '启动(启动)',
            code:'205003',
            limit:'10~20(1)',
            unit:'分钟',
          },
          {
            num:61,
            name: '启动(启动)',
            code:'205003',
            limit:'100~200(1)',
            unit:'分钟',
          }
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          type: ''
        },
        rules: {
          nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }]
        }, // 表单验证规则
        dialogTitle: '新增属性'
      }
    },
    methods: {
      deleteItem(){
        console.log('告警-删除');
      },
      handleClick(row) {
        console.log(row)
        this.form = {
          name: row.name,
          nickname: row.nickname,
          num: row.num,
          type: [row.type]
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
    }
  }
  