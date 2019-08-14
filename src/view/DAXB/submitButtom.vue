<template>
  <div class="submit">
    <div class="clauseBox">
      <p><span :class="checkData ? 'checkOn': 'checkOff'" @click="check"></span>我已阅读并接受<a href="http://">产品条款</a></p>
      <p>并承诺被保险人没有从事<a href="">高危职业</a>中相关职业。</p>
    </div>
    <div class="buttomBox">
      <p>保费：<span>{{premium}}</span></p>
      <button @click="submitBtn">立即投保</button>
    </div>
  </div>
</template>
<script>
export default {
  name:'submitButtom',
  props:['premium'],
  data(){
    return{
      agree:false,
      checkData:false,

    }
  },
  methods:{
    check:function(){
      this.checkData = !this.checkData;
    },
    submitBtn:function() {
      console.log('点击提交按钮');
      this.$emit('submitForm')
    }
  }
}
</script>
<style lang="scss" scoped>
.submit{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  border-top:1px solid #e8e8e8;
  .clauseBox{
    color: #373737;
    padding:12px 15px;
    font-size: 12px;
    p{
      a{
        color: $daxbColor;
        text-decoration: underline;
      }
    }
    p:last-child{
      margin-left: 22px;
    }
    span{
      display: inline-block;
      vertical-align: -4px;
      margin-right: 6px;
      width:16px;
      height:16px;
    }
    .checkOff{
      background: url(../../assets/images/img-common/off.png);
      background-size: 100% 100%;
    }
    .checkOn{
      background: url(../../assets/images/img-common/on.png);
      background-size: 100% 100%;
    }
  }
  .buttomBox{
    display: flex;
    font-size: 16px;
    line-height: 57.5px;
    padding-left: 15px;
    border-top: 1px solid #bbb;
    p{
      flex:1;
      color: #666;
      font-size: 13px;
      span{
        font-size: 16px;
        font-weight: bold;
        color: $daxbColor;
      }
    }
    button{
      outline: none;
      border: none;
      background:url(../../assets/images/img-common/btn.png) no-repeat;
      background-size: 100% 100%;
      width: 142px;
      height: 57.5px;
      color: #fff;
    }
  }
}
</style>
