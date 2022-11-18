const merge = require('webpack-merge');
var obj={name:"tom",age:19,sex:"男"}
console.log(merge(obj,{name:"jarry",x:199,y:200}));