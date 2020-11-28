export default {
  data() {
    return {
      input: '',
      tableData: [
        {
          typeid: '1'
        }
      ]
    }
  },
  methods: {
    handleClick(data) {
      console.log(data)
      this.$router.push({ name: 'machineProDetailEdit' })
    }
  }
}
