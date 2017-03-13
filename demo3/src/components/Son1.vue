<template>
  <div class="template">
     <button @click="childClick"></button>
  </div>
</template>
<script>
  export default {
    data() {
      return { msg: "" }
    },methods:{
        childClick: function () { 
            this.$emit("test", this.msg);  
        }
    }
  } 
</script>
<style>
.template{
  color:pink;
}
</style>