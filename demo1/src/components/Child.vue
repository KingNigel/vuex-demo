<template>
  <div class="template">
     <input type="text" v-model="foo">
  </div>
</template>
<script>
  export default {
    props:["foo"],
    data() {
      return { }
    }
  } 
</script>
<style>
.template{
  color:pink;
}
</style>