<template>
  <div class="template">
     <!--input type="text" v-model="bar"-->
    <p>{{foo}}</p>
     <input type="text" @keyup="findParent">
  </div>
</template>
<script>
  export default {
    props:["foo"],
    data() {
      return {}
    },methods: {  
        findParent: function () {  
            console.log(this.$parent);  //访问根组件  
            console.log(this.$parent.msg);  //访问根组件的val属性  
            console.log(this.$parent.$children.indexOf(this));  //查看当前能否在其父组件的子组件中找到索引  
            console.log(this.$parent === this.$root);   //查看父组件和根组件是不是全等的  
        }  
    }  
  } 
</script>
<style>
.template{
  color:pink;
}
</style>