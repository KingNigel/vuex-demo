<template>
  <div class="tpl">
     <Child1></Child1>
     <Child2></Child2>
     <p>{{msg}}</p>
  </div>
</template>
<script>
  
  import Child1 from './components/Child1.vue';
  
  import Child2 from './components/Child2.vue';
  //曝露出对象
  export default {
    data() {
      return {
        msg:""
      }
    },
    components:{
      Child1,
      Child2
    }
  }
</script>
<style>
.tpl{
  color:pink
}
</style>