## 使用

```javascript

  <OrderDialog
  :formConfig="formConfig"
  @dialogConfirm="handleConfirm"
  :dialogFormVisible="dialogFormVisible" @handleClickCancel="handleClickCancel">
  </OrderDialog>

```

## 配置

```javascript
    dialogFormVisible： {
      type: Boolean // 弹框的显示与隐藏
    }
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
    handleConfirm(data) { // @dialogConfirm 点击确定按钮的事件 获取到form表单的数据
      console.log('这是子组件2传过来', data)
      this.$emit('dialogConfirm', data)
      this.dialogFormVisible = false
    },
    handleClickCancel() { // @handleClickCancel 点击取消按钮的事件
      this.$emit('handleClickCancel')
    }
```
