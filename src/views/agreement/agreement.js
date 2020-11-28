import router from '@/router';
export default {
  name: '',
  data() {
    return {
      input: '',
      tableData: [{
          name: '111c12002400081005010021800111000000a400000000000000000000000000_单滚筒洗衣机网络通信协议(全)V2.17-V2.2-20160219-02	',
          type: '滚筒',
          groupCommand: '洗衣机属性',
        },
        {
          name: '111c12002400081005010021800111000000a400000000000000000000000000_单滚筒洗衣机网络通信协议(全)V2.17-V2.2-20160219-02	',
          type: '滚筒',
          groupCommand: '洗衣机属性',
        },
        {
          name: '111c12002400081005010021800111000000a400000000000000000000000000_单滚筒洗衣机网络通信协议(全)V2.17-V2.2-20160219-02	',
          type: '滚筒',
          groupCommand: '洗衣机属性',
        }
      ],
    }
  },
  methods: {
    searchClick() {
      console.log('协议页查询');
    },
    alarmDetail() {
      console.log('协议-告警');
      router.push({
        name: 'agreementAlarm'
      })
    },
    groupCommandDetail() {
      console.log('协议-组命令');
      router.push({
        name: 'agreementGroupCommand'
      })
    },
    deleteItem() {
      console.log('协议-删除');
    },
    WashSetting() {
      console.log('查看详细配置');
      router.push({
        name: 'agreementWashSetting'
      })
    },

  },
}
