<template>
  <div>
    <div class="container">
      <header>
        <slot :slotData=slotData name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      slotData:'子组件数据'
    }
  },
  methods:{
    // abc(){
    //   console.log('123');
      
    // }
  }
}
</script>
<style lang="scss" scoped>
h1{
  font-size: 60px;
}
</style>
