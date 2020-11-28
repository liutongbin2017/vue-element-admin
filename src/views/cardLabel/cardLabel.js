export default {
  name: '',
  data() {
    return {
      ifConnect:false, //关联按钮显示
      connectDialogTitle:'关联卡片',
      isShowConnectDialog:false, //关联弹窗
      dialogTitle: '新增标签', //新增弹框标题
      ifNew:true, //是否显示新增按钮
      dialogFormVisible: false, //新增弹窗
      form:{name:''}, //新增弹框中输入的内容
      //页面内容数据
      washCardData: [{
        logo: '',
        name: '衬衫洗',
        washTime: '123',
        downLoadTimes: '123423',
        suggestion: '洗前可以在衣领、袖口涂抹适量的洗涤剂',
        describe: '我的衬衫我做主'
      }, {
        logo: '',
        name: '衬衫洗',
        washTime: '123',
        downLoadTimes: '123423',
        suggestion: '洗前可以在衣领、袖口涂抹适量的洗涤剂',
        describe: '我的衬衫我做主'
      }, {
        logo: '',
        name: '衬衫洗',
        washTime: '123',
        downLoadTimes: '123423',
        suggestion: '洗前可以在衣领、袖口涂抹适量的洗涤剂',
        describe: '我的衬衫我做主'
      }],
      //关联穿梭框源数据
      data1:[
        {key:1,label:'备选1',disabled:false},
        {key:2,label:'备选2',disabled:false},
        {key:3,label:'备选3',disabled:false},
        {key:4,label:'备选4',disabled:false},
        {key:5,label:'备选5',disabled:true}, 
      ],
      value1:[],
      rules: {
        name: [{
          required: true,
          message: '请输入名称',
          trigger: 'blur'
        }]
      }, // 表单验证规则
    }
  },
  methods: {
    // 标签点击事件
    season(){
      console.log('点击测试');
      this.ifNew=false;
      this.ifConnect=true;
    },
    // 导航栏关闭与展开
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.ifNew=true;
      this.ifConnect=false;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      this.ifNew=true;
      this.ifConnect=false;
    },
    // 全部卡片点击事件
    showAllCards(){
      console.log('allCards');
    },
    // 点击新增标签
    isShowNewDialog() {
      this.dialogFormVisible = true;
      this.dialogTitle = '新增标签';
    },
    // 点击关联按钮
    connect(){
      this.isShowConnectDialog=true;
    },
    // 隐藏dialog
    dialogHide() {
      this.dialogFormVisible = false;
      this.isShowConnectDialog=false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
          this.dialogFormVisible = false;
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
        }
      }
    }
  }
}
