export default {
  data() {
    return {
      input: '',
      tableData: [
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606370428207&di=f9d6dbb9d914acf0850e6c8521553279&imgtype=0&src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2F95eef01f3a292df57dfed7329f5fd56634a87348.jpeg%3Ftoken%3Db78d3500f502c43601b196e2700b4893',
          address: '名称'
        }
      ],
      form: { name: '' },
      dialogFormVisible: false,
      fileList:[]
    }
  },
  methods: {
    // 点击进入自适配程序
    handleClickPro(data) {
      this.$router.push({ name: 'cardProList' })
    },
    // 点击编辑
    handleEditClick(data) {
      console.log(data)
      this.dialogFormVisible = true
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
