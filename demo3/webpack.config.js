var htmlWebpackPlugin= require('html-webpack-plugin');
var path=require('path');
var distPath=path.join(__dirname,"/src/main.js");
module.exports={
   entry:distPath,
   output:{
  //   path:distPath,
     filename:"/dist/build.js"},
   module:{
     loaders:[{
        test:/\.vue$/,
        exclude:/node_modules/,
        loader:'vue-loader'
    },{
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader?presets[]=es2015'
    },{
       test:/\.css$/,
       loader:"style-loader!css-loader"
     },
     {
       test:/\.(jpg|png)$/,
       loader:"url-loader?limit=400"
     }
     ]
   },
   plugins:[new htmlWebpackPlugin({
   title:'index', 
   filename:'index.html',
   template:'./src/index.html'
   })]

}