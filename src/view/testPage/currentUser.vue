<template>
  <div>
    <span>
      <slot :user="user">{{ user.lastName }}</slot>
    </span>
  </div>
</template>
<script>
export default {
  data(){
    return{
      user:{
        firstName:'父',
        lastName:'子'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
