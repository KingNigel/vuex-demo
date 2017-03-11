<template>
  <div class="tpl">
     <child foo="要传的值"></child>
  </div>
</template>
<script>
  import child from './components/Child.vue';
  //曝露出对象
  export default {
    data() {
      return {
        msg:""
      }
    },
    components:{
      child
    }
  }
</script>
<style>
.tpl{
  color:pink
}
</style>