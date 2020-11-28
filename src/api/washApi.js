import request from '@/utils/request'
// 分页查询数据定义列表
export function getDataList(currentPage, name, type, category) {
  return request({
    url: '/wash-adapter2-manager/item/getItemList',
    method: 'post',
    data: { currentPage, name, type, category }
  })
}
// 保存(新增)数据定义属性
/**
 *
 * @param {itemId} 数据定义ID，新增时不填
 * @param {name} 名称
 * @param {alias} 昵称
 * @param {number} 序号
 * @param {type} 支持机型，1为波轮，2为滚筒，4干衣机，3为波轮/滚筒，5为波轮/干衣机，6为滚筒/干衣机，7为波轮/滚筒/干衣机
 * @param {category} 属性类型，1为洗衣机属性，2为筒属性，3为附加功能，4为程序名称
 */
export function saveData(data) {
  return request({
    url: '/wash-adapter2-manager/item/save',
    method: 'post',
    data: data
  })
}
