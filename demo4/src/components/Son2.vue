<template>
  <div class="template">
     <input type="text" v-model="msg">
  </div>
</template>
<script>
  import bus from '../bus.js';
  export default {
    created:function(){
      bus.$on('a', function (data) {
         console.log(data);
         this.msg=data;
      })
    },
    data() {
      return { msg: "son2" }
    }
  } 
</script>
<style>
.template{
  color:pink;
}
</style>