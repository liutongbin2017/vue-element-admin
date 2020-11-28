## 使用

```javascript

  <tableDialog
  :tableConfig="tableConfig"
  :formConfig="formConfig"
   @selectionChange="selectionChange"
   @dialogConfirm="dialogConfirm"
   @currentClick="currentClick"
   @selectDialogTable="showDialogTable"
   >
   </tableDialog>

```

## 配置

```javascript
    tableConfig: {
      pagination: false, // 是否显示分页
      pageTotal: 1000, // 设置分页条数
      tableCheck: true, // 是否显示多选框
      operation: true, // 是否显示操作栏
      displayForm: false, // 是否有form数据
      tableData: [   // table的数据源
        {
          name: '1'
        },
        {
          name: '2'
        }
      ],
      fieldList: [    // 设置表头
        { label: '编号', value: 'id' },
        { label: '名称', value: 'name' },
        { label: 'Code', value: 'Code' },
        { label: '下限~上限(步长)', value: 'step' },
        { label: '单位', value: 'danwei' },
        { label: '是否可调', value: 'set' },
        { label: '是否关闭', value: 'isoff' }
      ]
    },
    formConfig: {
      formTitle: '编辑命令', // 弹框的title
      formData: [
        {
          key: 'a', // 对应数据源的key值
          type: 'Input', // 表单类型
          name: '输入框'
        },
        {
          key: 'b',
          type: 'Select',
          name: '下拉框',
          options: [
            {
              label: '下1',
              value: '1'
            },
            {
              label: '下2',
              value: '2'
            }
          ]
        }
      ]
    }
```

## 事件

```javascript
    currentClick(data) {  // @currentClick 点击分页的页数
      console.log('分页点击当前', data);
    },
    dialogConfirm(data) { // @dialogConfirm 点击弹窗的确定 弹框表单里的数据
      console.log('这是子组件1传过来的', data)
    },
    selectionChange(data) { // @selectionChange表格中复选框选中的数据
      console.log('从子组件传递过来的', data)
    },
    showDialogTable(data){  // @selectDialogTable 点击表格的弹窗里的表格的多选框选中值
      console.log('点击弹窗的表格的值', data);
    },
```
