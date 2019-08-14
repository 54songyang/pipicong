<template>
  <div class="hello" @click="abc()">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in backgroundImg" :key="index">
            <img :src="item" alt="">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-button-next"></div> -->
      
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'homePage',
  data () {
    return {
      backgroundImg:[
        'static/images/background0.jpg',
        'static/images/background1.jpg',
        'static/images/background2.jpg',
        'static/images/background3.jpg',
        'static/images/background4.jpg',
        'static/images/background5.jpg',
        'static/images/background6.jpg',
        'static/images/background7.jpeg',
        'static/images/background8.jpg',
        'static/images/background9.jpg',
        'static/images/background10.jpg',
      ]
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      // loop: true,//循环滚动
      direction: 'horizontal',
      loop: true,
      slidesPerView: "auto",
      centeredSlides:true,
      // spaceBetween: 10,
    })

    let data = {
      abc:'1'
    }
    this.$axios({
      url:'https://www.easy-mock.com/mock/5b1a305c98c31e30a66e3995/hwp-admin/updatePassword',
      method: "post",
      data: data
    })
    .then((response)=> {
      // var abc = 123
      // var def = abc.toUpperCase();
      console.log(response);
    })
    // .catch((res)=>{
    //   console.log('res',res);
    // })   
  },
  methods:{
    abc(){
      this.$router.push('./DAXB')
      
    }
  }
}
</script>
<style lang="scss" scoped>
.hello{
  img{
    display: block;
    width:100%;
    height:100%;
  }
  .swiper-container {
    width: 100vw;
    height: 100vh;
  }
}

</style>

