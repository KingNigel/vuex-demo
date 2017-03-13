<template>
  <div class="template">
     <button @click="childClick"></button>
  </div>
</template>
<script>

  
  import bus from '../bus.js';
    
  export default {
    data() {
      return { msg: "asdasd" }
    },methods:{
        childClick: function () { 
            bus.$emit("a", this.msg);  
        }
    }
  } 
</script>
<style>
.template{
  color:pink;
}
</style>