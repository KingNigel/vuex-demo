//引入vue包，这里可以直接使用模块的名字
  import Vue from 'vue';
  import Parent from './Parent.vue';

  new Vue({
    el:"#app",
    //渲染方法
    // render:function(create){
    //     //将app组件渲染到页面上
    //   return (create(APP))
    // },
    render:c=>c(Parent)
  })