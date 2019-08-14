const toast = function(txt, time=1000 , type="txt") {
  return this.$createToast({
    type: type,
    txt: txt,
    time: time
  }).show();
}
const confirmDialog = function(title, content, $confirm) {
  return this.$createDialog({
    type: "confirm",
    icon: "",
    title: title,
    content: content,
    confirmBtn: {
      text: "确定",
      active: false,
      disabled: false,
      href: "javascript:;"
    },
    cancelBtn: {
      text: "取消",
      active: true,
      disabled: false,
      href: "javascript:;"
    },
    onConfirm: $confirm, // 取消事件为空，弹窗也消失
    onCancel: () => {}
  }).show();
}
export { toast, confirmDialog}