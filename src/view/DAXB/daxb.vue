<template>
  <div class="daxbBody">
    <div class="bg"></div>
    <div class="tab">
      <div :class="[{active:tabBtn==='0'},'tabPart']" @click="tabBtn='0'">
        <div>
          <p>基础版</p>
          <p>60元</p>
        </div>
      </div>
      <div :class="[{active:tabBtn==='1'},'tabPart']" @click="tabBtn='1'">
        <div>
          <p>安心版</p>
          <p>120元</p>
        </div>
      </div>
      <div :class="[{active:tabBtn==='2'},'tabPart']" @click="tabBtn='2'">
        <div>
          <p>无忧版</p>
          <p>240元</p>
        </div>
      </div>
    </div>
    <div class="insuranceType">
      <div class="item" v-for="(item,index) in insurance.insuranceType" :key="index">
        <p>{{item.title}}</p>
        <p>{{item.value}}</p>
      </div>
    </div>
    <cutOff></cutOff>
    <div class="mainTabBody">
      <div :class="[{isFixed:searchBarFixed === true},'mainTab']">
        <div :class="{active : maintab === '0'}" @click="changeTab('0')">产品特色</div>
        <div :class="{active : maintab === '1'}" @click="changeTab('1')">理赔说明</div>
        <div :class="{active : maintab === '2'}" @click="changeTab('2')">我要投保</div>
      </div>
    </div>
    <div class="introduce scroll_title"></div>
    <cutOff></cutOff>
    <div class="explain scroll_title"></div>
    <cutOff></cutOff>
    <div class="form scroll_title">
      <p class="inTitle">填写投保信息</p>
      <div class="formBody">
        <div class="step">
          <span class="num">
            <em>1</em>
          </span>
          <p>填写投保人信息</p>
        </div>
        <div class="formPart">
          <!-- <mt-field label="姓名" placeholder="请输入姓名" v-model="form.username"></mt-field>
          <border></border>
          <mt-field label="身份证号码" :attr="{ maxlength: 18 }" placeholder="请输入身份证号码" v-model="cardNum"></mt-field>
          <border></border>
          <mt-field label="手机号码" :attr="{ maxlength: 11 }" placeholder="请输入手机号码" type="tel" v-model="form.phone"></mt-field>
          <border></border>
          <mt-field label="验证码" :attr="{ maxlength: 6 }" type="number" v-model="form.captcha" placeholder="请输入验证码">
            <div class="authentication">获取验证码</div>
          </mt-field>
          <border></border>
          <mt-field label="邮箱" :state="emailState" type="email" v-model="form.email" placeholder="请输入电子邮箱"></mt-field>-->
          <border></border>

          <!-- <v-input
            ref="virtualInput"
            v-model="amount"
            :placeholder="placeText"
            :is-auto-focus="true"
            @show-key-board="showKeyBoard">
          </v-input>
          <v-keyboard ref="virtualKeyBoard"></v-keyboard>-->
        </div>
      </div>
      <div class="formBody">
        <div class="step">
          <span class="num">
            <em>2</em>
          </span>
          <p>填写被保人信息</p>
        </div>
        <div class="insuredPerson">
          <p>为谁投保</p>
          <div class="inTab">
            <div :class="{active : inTab === '0'}" @click="chooseInsured('0')">本人</div>
            <div :class="{active : inTab === '1'}" @click="chooseInsured('1')">配偶</div>
            <div :class="{active : inTab === '2'}" @click="chooseInsured('2')">父母</div>
            <div :class="{active : inTab === '3'}" @click="chooseInsured('3')">子女</div>
          </div>
        </div>
        <div class="formPart" v-show="inTab != '0'">
          <!-- <mt-field label="姓名" placeholder="请输入被保人姓名" type="text" v-model="form.busername"></mt-field>
          <border></border>
          <mt-field label="身份证号码" :attr="{ maxlength: 18 }" placeholder="请输入被保人身份证号码" v-model="bcardNum"></mt-field>
          <border></border>
          <mt-field label="手机号码" :attr="{ maxlength: 11 }" placeholder="请输入被保人手机号码" type="tel" v-model="form.bphone"></mt-field>
          <border></border>
          <mt-field label="请确认手机号码" :attr="{ maxlength: 11 }" placeholder="请再次输入被保人手机号码" type="tel" v-model="form.phoneAgain"></mt-field>-->
          <border></border>
        </div>
      </div>
      <div class="formBody">
        <div class="step">
          <span class="num">
            <em>3</em>
          </span>
          <p>保障计划</p>
        </div>
        <div class="bottomTab">
          <div :class="{active:tabBtn==='0'}" @click="tabBtn='0'">基础版</div>
          <div :class="{active:tabBtn==='1'}" @click="tabBtn='1'">安心版</div>
          <div :class="{active:tabBtn==='2'}" @click="tabBtn='2'">无忧版</div>
        </div>
      </div>
    </div>
    <cutOff></cutOff>

    <input style="font-size:40px;" id="a" type="date" v-model="dateA" />
    <input style="font-size:40px;" id="b" type="date" v-model="dateB" />

    <submitButtom @submitForm="submitForm" :premium="insurance.premium"></submitButtom>
  </div>
</template>
<script>
import submitButtom from "./submitButtom";
// import vInput from '../../components/keyboard/virtual-input'
// import vKeyboard from '../../components/keyboard/virtual-keyboard'
export default {
  name: "daxb",
  components: {
    submitButtom
    // vInput,
    // 	vKeyboard,
  },
  data() {
    return {
      // amount:'',
      // placeText:'',

      dateA: this.formatDate(new Date()),
      dateB: this.formatDate(new Date().setDate(new Date().getDate() + 1)),
      searchBarFixed: false,
      tabBtn: "0",
      maintab: "0",
      inTab: "0",
      emailState: "success", //error,warning
      form: {
        username: "",
        phone: "",
        cardNumber: "",
        captcha: "",
        email: "",

        busername: "",
        bcardNumber: "",
        bphone: "",
        phoneAgain: ""
      },
      insurance0: {
        premium: "60元",
        insuranceType: [
          { title: "意外身故保险金", value: "5万元" },
          { title: "意外伤残保险金", value: "5000元" },
          { title: "航空意外身故/伤残保险金", value: "50万元" },
          { title: "公交、地铁、出租车意外身故/伤残保险金", value: "5万元" },
          { title: "驾驶、乘坐私家车意外身故/伤残保险金", value: "2万元" },
          { title: "意外门急诊医疗保险金", value: "2000元" },
          { title: "意外住院医疗保险金", value: "5000元" },
          { title: "意外住院津贴保险金(元/天)", value: "50元" },
          { title: "投保年龄", value: "30天-65周岁(含)" },
          { title: "保险期间", value: "1年" }
        ]
      },
      insurance1: {
        premium: "120元",
        insuranceType: [
          { title: "意外身故保险金", value: "10万元" },
          { title: "意外伤残保险金", value: "1万元" },
          { title: "航空意外身故/伤残保险金", value: "100万元" },
          { title: "公交、地铁、出租车意外身故/伤残保险金", value: "10万元" },
          { title: "驾驶、乘坐私家车意外身故/伤残保险金", value: "5万元" },
          { title: "意外门急诊医疗保险金", value: "5000元" },
          { title: "意外住院医疗保险金", value: "1万元" },
          { title: "意外住院津贴保险金(元/天)", value: "100元" },
          { title: "投保年龄", value: "30天-65周岁(含)" },
          { title: "保险期间", value: "1年" }
        ]
      },
      insurance2: {
        premium: "240元",
        insuranceType: [
          { title: "意外身故保险金", value: "20万元" },
          { title: "意外伤残保险金", value: "2万元" },
          { title: "航空意外身故/伤残保险金", value: "200万元" },
          { title: "公交、地铁、出租车意外身故/伤残保险金", value: "20万元" },
          { title: "驾驶、乘坐私家车意外身故/伤残保险金", value: "10万元" },
          { title: "意外门急诊医疗保险金", value: "1万元" },
          { title: "意外住院医疗保险金", value: "2万元" },
          { title: "意外住院津贴保险金(元/天)", value: "200元" },
          { title: "投保年龄", value: "30天-65周岁(含)" },
          { title: "保险期间", value: "1年" }
        ]
      }
    };
  },
  computed: {
    //身份证号转大写
    cardNum: {
      get: function() {
        return this.form.cardNumber;
      },
      set: function(val) {
        this.form.cardNumber = val.toUpperCase();
      }
    },
    bcardNum: {
      get: function() {
        return this.form.bcardNumber;
      },
      set: function(val) {
        this.form.bcardNumber = val.toUpperCase();
      }
    },
    insurance() {
      switch (this.tabBtn) {
        case "0":
          return this.insurance0;
          break;
        case "1":
          return this.insurance1;
          break;
        case "2":
          return this.insurance2;
      }
      return;
    },
    offsetTop() {
      //tab栏距顶部距离
      return document.querySelector(".mainTab").offsetTop;
    },
    introduceOffsetTop() {
      return document.querySelector(".introduce").offsetTop;
    },
    explainOffsetTop() {
      return document.querySelector(".explain").offsetTop;
    },
    formOffsetTop() {
      return document.querySelector(".form").offsetTop;
    }
  },
  mounted() {
    // if ('addEventListener' in document) {
    //     document.addEventListener('DOMContentLoaded', function(){
    //         FastClick.attach(document.body);
    //     }, false);
    // }
    // //保证子组件实例化完成之后将virtualInput的实例传给virtualKeyBoard
    // this.$refs.virtualKeyBoard.$emit('getInputVm', this.$refs.virtualInput);
    this.getInfo();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 格式化时间方法，结果类型 yy-mm-dd
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [year, month, day].join("-");
    },
    // showKeyBoard() {
    // 	//键盘弹出的同时，传入输入框对象
    //   this.$refs.virtualKeyBoard.$emit('getInputVm', this.$refs.virtualInput);
    // },

    chooseInsured(index) {
      this.inTab = index;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let introduceHeight = document.querySelector(".introduce").clientHeight;
      let explainHeight = document.querySelector(".explain").clientHeight;
      let formHeight = document.querySelector(".form").clientHeight;
      let scrollTopData = scrollTop + 106;
      scrollTop > this.offsetTop
        ? (this.searchBarFixed = true)
        : (this.searchBarFixed = false);
      if (
        this.introduceOffsetTop + introduceHeight > scrollTopData &&
        scrollTopData >= this.introduceOffsetTop
      ) {
        this.maintab = "0";
      } else if (
        this.explainOffsetTop + explainHeight > scrollTopData &&
        scrollTopData >= this.explainOffsetTop
      ) {
        this.maintab = "1";
      } else if (
        this.formOffsetTop + formHeight > scrollTopData &&
        scrollTopData >= this.formOffsetTop
      ) {
        this.maintab = "2";
      }
    },
    changeTab(index) {
      let jump = document.querySelectorAll(".scroll_title");
      let scroll_content = document.querySelector(".scroll_content");
      let total = jump[index].offsetTop - 106; //这里的106是我头部header的高度
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获取需要滚动的距离
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          window.scrollTo(0, distance);
          setTimeout(smoothDown, 10);
        } else {
          window.scrollTo(0, total);
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(smoothUp, 10);
        } else {
          window.scrollTo(0, total);
        }
      }
    },
    checkForm() {
      let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证校验
      let phoneNum = /^1(3|4|5|7|8)\d{9}$/; //手机号校验
      let emailNum = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (!this.form.username) {
        // this.$toast('请输入投保人姓名')
        return false;
      }
      if (this.form.cardNumber) {
        if (!regIdNo.test(this.form.cardNumber)) {
          // this.$toast('请输入正确的身份证号')
          return false;
        }
      } else {
        // this.$toast('请输入投保人身份证号')
        return false;
      }

      if (this.form.phone) {
        if (!phoneNum.test(this.form.phone)) {
          // this.$toast('请输入正确的手机号')
          return false;
        }
      } else {
        // this.$toast('请输入投保人手机号')
        return false;
      }

      if (!this.form.captcha) {
        // this.$toast('请输入验证码')
        return false;
      }

      if (this.form.email) {
        if (!emailNum.test(this.form.email)) {
          // this.$toast('请输入正确的邮箱')
          return false;
        }
      } else {
        // this.$toast('请输入投保人邮箱')
        return false;
      }
    },
    checkBeForm: function() {
      let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证校验
      let phoneNum = /^1(3|4|5|7|8)\d{9}$/; //手机号校验
      if (!this.form.busername) {
        this.$showToast("请输入被保人姓名");
        return false;
      }
      if (this.form.bcardNumber) {
        if (!regIdNo.test(this.form.bcardNumber)) {
          this.$showToast("请输入正确的身份证号");
          return false;
        }
      } else {
        this.$showToast("请输入被保人身份证号");
        return false;
      }

      if (this.form.bphone) {
        if (!phoneNum.test(this.form.bphone)) {
          this.$showToast("请输入正确的手机号");
          return false;
        }
      } else {
        this.$showToast("请输入被保人手机号");
        return false;
      }

      if (this.form.phoneAgain) {
        if (!phoneNum.test(this.form.bphone)) {
          this.$showToast("请输入正确的手机号");
          return false;
        }
      } else {
        this.$showToast("请输入被保人手机号");
        return false;
      }

      if (this.form.bphone != this.form.phoneAgain) {
        this.$showToast("两次输入手机号不一致");
        return false;
      }
    },
    submitForm: function() {
      this.checkForm();
      if (this.inTab != "0") {
        this.checkBeForm();
      }
    },
    getInfo() {
      this.$axios({
        url: "http://www.pipicong.top/getinfo",
        method: "get",
        data: '123'
      }).then(response => {
        console.log('测试服务器接口',response);
      });
    }
  }
};
</script>
<style lang="scss">
.bg {
  background: url(../../../static/images/home.png) no-repeat;
  width: 100%;
  height: 369px;
  background-size: 100% 100%;
}
.daxbBody {
  padding-bottom: 120px;
  .tab {
    padding: 0 15px;
    font-size: 13px;
    text-align: center;
    display: flex;
    margin-top: 20px;
    .tabPart {
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100% / 3);
      height: 40px;
      border: 1px solid $daxbColor;
    }
    .tabPart:first-child {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
    .tabPart:nth-child(2) {
      border-left: none;
      border-right: none;
    }
    .tabPart:last-child {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    .active {
      background: $daxbColor;
      color: #fff;
    }
  }
  .insuranceType {
    padding: 0 15px;
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 20px;
    .item {
      display: flex;
      justify-content: space-between;
      p {
        line-height: 30px;
      }
    }
  }
  .mainTabBody {
    height: 52px;
  }
  .mainTab {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 52px;
    line-height: 52px;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    div {
      width: calc(100% / 3);
      text-align: center;
      font-size: 16px;
      font-weight: 650;
      color: #666;
      border-bottom: 1px solid transparent;
      box-sizing: border-box;
      height: 100%;
    }
    .active {
      color: $daxbColor;
      border-bottom: 3px solid $daxbColor;
      font-weight: 700;
    }
  }
  .isFixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  em {
    display: block;
    height: 50px;
  }
  .introduce {
    background: url(../../../static/images/introduce.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 1954px;
  }
  .explain {
    background: url(../../../static/images/explain.png) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 1140px;
  }
  .form {
    padding: 0 15px;
    .inTitle {
      font-size: 15px;
      color: #333;
      font-weight: 700;
      line-height: 50px;
      border-bottom: 1px solid #dcdcdc;
    }
    .formBody {
      .active {
        background: url(../../assets/images/img-common/active-span.png)
          no-repeat;
        background-size: 100% 100%;
        border: none !important;
        color: #fff !important;
      }
      .insuredPerson {
        display: flex;
        margin-top: 20px;
        p {
          color: #333;
          font-size: 13px;
          width: 25%;
        }
        .inTab {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          div {
            width: 47.85%;
            text-align: center;
            height: 37.5px;
            border: 1px solid #898989;
            box-sizing: border-box;
            font-size: 13px;
            color: #666;
            line-height: 37.5px;
            border-radius: 3px;
          }
          div:nth-child(2n + 1) {
            margin-right: 4.3%;
          }
          div:nth-child(1) {
            margin-bottom: 12px;
          }
          div:nth-child(2) {
            margin-bottom: 12px;
          }
        }
      }
      .step {
        margin-top: 15px;
        .num {
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          background: $daxbColor;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          font-weight: normal;
          margin-right: 9px;
        }
        p {
          font-size: 14px;
          color: #333;
          line-height: normal;
          font-weight: 650;
        }
        em {
          display: block;
          font-size: 12px;
          color: #fff;
          line-height: 18px;
          height: 18px;
        }
      }
      .formPart {
        margin-top: 10px;
        .authentication {
          font-size: 13px;
          color: #666;
          line-height: 32px;
          height: 32px;
          padding: 0 20px;
          border-left: 1px solid #c5c5c5;
        }
      }
      .bottomTab {
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        div {
          font-size: 13px;
          color: #666;
          border-radius: 3px;
          text-align: center;
          line-height: 32px;
          width: 30%;
          border: 1px solid #898989;
        }
        .active {
          background: url(../../assets/images/img-common/active-span.png)
            no-repeat;
          background-size: 100% 100%;
          border: none;
          color: #fff;
        }
      }
    }
  }
}
</style>