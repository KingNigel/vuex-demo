<template>
  <div class="tpl">
     <son1 @test="foo"></son1>
     <son2></son2>
     <p>{{msg}}</p>
  </div>
</template>
<script>
  
  import son1 from './components/Son1.vue';
  
  import son2 from './components/Son2.vue';
  //曝露出对象
  export default {
    data() {
      return {
        msg:""
      }
    },
    // methods:{
    //     foo: function (aaa) { 
    //       console.log(1);
    //     }
    // },
    components:{
      son1:son1,
      son2:son2
    }
  }
</script>
<style>
.tpl{
  color:pink
}
</style>