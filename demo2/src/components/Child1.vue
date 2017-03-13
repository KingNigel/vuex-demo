<template>
  <div class="template">
     <input type="text" v-model="msg">
  </div>
</template>
<script>
  export default {
    data() {
      return { msg: "son" }
    }
  } 
</script>
<style>
.template{
  color:pink;
}
</style>