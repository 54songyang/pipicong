<template>
  <div>
    <p>子组件</p>
    <p>接收父组件数据{{jfdm}}</p>
    <button @click="btn_click()">0987</button>
  </div>
</template>
<script>
export default {
  name:'test2',
  props:['jfdm'],
  data(){
    return{
      indos:34323
    }
  },
  methods:{
    btn_click(){
      this.$emit('setData',this.indos)
    }
  }
}
</script>
<style lang="scss" scoped>
  button{
    width: 100px;
    height: 100px;
  }
</style>

