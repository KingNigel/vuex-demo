<template>
  <div class="template">
     <input type="text" v-model="msg">
     <button @click="childClick"></button>
  </div>
</template>
<script>
  export default {
    data() {
      return { msg: "son" }
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