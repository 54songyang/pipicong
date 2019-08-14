<template>
  <div>
    <p>父组件</p>
    <test2 :jfdm="jfdm" @setData="setData($event)"></test2>
    <p>接受子组件数据{{dataB}}</p>

    <h1>学习插槽</h1>

    <test3>Save</test3>

    <base-layout>
      <template #header="{ slotData }">
        <h1>{{slotData}}</h1>
        <test3>Save</test3>
      </template>

      <!-- <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
              <p>没有名称</p>
      <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>-->
    </base-layout>
    <currentUser #default="{user}">{{ user.firstName }}</currentUser>

    <cube-button @click="showDatePicker">Date Picker</cube-button>

    <div>{{jfdm | digital}}</div>
  </div>
</template>
<script>
import test2 from "./test2";
import test3 from "./test3";
import baseLayout from "./baseLayout";
import currentUser from "./currentUser";
export default {
  name: "test1",
  components: {
    test2,
    test3,
    baseLayout,
    currentUser,
    eventName: "click"
  },
  data() {
    return {
      jfdm: "5678908983782879",
      dataB: ""
    };
  },
  mounted(){
    var data = new Date;
    // console.log('年',this.$toast());
    
  },
  methods: {
    setData(val) {
      console.log("val", val);

      this.dataB = val;
    },
    slotFn() {
      console.log("123");
    },
    showDatePicker() {
      let date = new Date
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: "Date Picker",
          min: new Date(1920, 1, 1),
          max: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      }

      this.datePicker.show();
    },
    selectHandle(date, selectedVal, selectedText) {
      // this.$createDialog({
      //   type: "warn",
      //   content: `Selected Item: <br/> - date: ${date} <br/> - value: ${selectedVal.join(
      //     ", "
      //   )} <br/> - text: ${selectedText.join(" ")}`,
      //   icon: "cubeic-alert"
      // }).show();
      this.$confirmDialog("标题", "确定取消订单", this.cancelOderFun());
    },
    cancelOderFun(){
      console.log(123)
    },
    cancelHandle() {
      this.$toast('123')
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 50px;
}



.keyBoard{position: fixed;bottom: 0;left: 0;width: 100%;background: #d0d3da;display: none;transition: all 0.20s linear;}
      .close{display: flex;justify-content: center;width: 100%;text-align: center;font-size: 10px;color: #000000;line-height: 20px;height: 20px;border-top: 1px solid #f1f1f1;}
      .close::after{content: '';display: block;width: 10px;height: 10px;border-top: 1px solid #999;border-left: 1px solid #999;transform: rotate(-135deg);}.keyBox{display: flex;flex-wrap: wrap;justify-content: space-evenly;}
      .keyBox div{width: calc(100% / 3 - 6px);margin-bottom: 6px;border-radius:6px;box-shadow:0px 1px 0px #878b8e;text-align: center;font-size: 24px;line-height: 44px;height: 47px;background: #fff;}.keyBox div:nth-child(3n+3){border-right: none;}
      .keyCursor{display: none;position: absolute;top:0;left: 0;width: 2px;height: 40px;background: #000000;animation: blink 1s infinite steps(1, start);}.keyBox .gray{background: none;box-shadow: none;}.keyBox div svg{margin-top:7px;}
      @keyframes blink {0%{background-color: white;}50% {background-color: black;}100% {background-color: white;}}.valbox{position:fixed;left:999px;opacity: 0}.occupancy{display: none;height: 234px;}
</style>

