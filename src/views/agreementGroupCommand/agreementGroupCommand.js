export default {
  name: '',
  data() {
    return {
      tableData: [{
          name: '高端专属洗可调参数设置组命令1',
          key: '000001',
          unit: '筒',
        },
        {
          name: '高端专属洗可调参数设置组命令2',
          key: '000002',
          unit: '筒',
        },
        {
          name: '高端专属洗可调参数设置组命令3',
          key: '000003',
          unit: '筒',
        }
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        key: '',
        unit: '',
      },
      rules: {
        name: [{
          required: true,
          message: '请输入组名称',
          trigger: 'blur'
        }],
        key: [{
          required: true,
          message: '请输入组key',
          trigger: 'blur'
        }],
        unit: [{
          required: true,
          message: '请输入所属筒',
          trigger: 'blur'
        }],
      }, // 表单验证规则
      dialogTitleEdit: '编辑组命令',
      dialogTitleNew: '新增组命令',
      isShowNewDialog: false,
      // value1:['备选项1','备选项2','备选项3'],
      value1: [1, 4],
      data1: [{
          key: 1,
          label: '备选1',
          disabled: false
        },
        {
          key: 2,
          label: '备选2',
          disabled: false
        },
        {
          key: 3,
          label: '备选3',
          disabled: false
        },
        {
          key: 4,
          label: '备选4',
          disabled: false
        },
        {
          key: 5,
          label: '备选5',
          disabled: true
        },
      ],
    };

  },
  methods: {
    createItem() {
      this.isShowNewDialog = true;
    },
    deleteItem() {
      console.log('组命令-删除');
    },
    //点击编辑组命令事件
    handleClick(row) {
      console.log(row)
      this.form = {
        name: row.name,
        key: row.key,
        unit: row.unit,
      }
      console.log('row', row);
      this.dialogFormVisible = true;
    },
    // 隐藏dialog
    dialogHide() {
      this.dialogFormVisible = false;
      this.isShowNewDialog = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
          this.dialogFormVisible = false;
          this.isShowNewDialog = false;
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
