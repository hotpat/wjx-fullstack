//隐式类型转换
//当一侧操作数为string类型，会优先将另一侧转换成字符串类型
console.log(1+'2')// 12 3
//当一侧操作数为Number类型时 另一侧会转为Number类型
console.log(1+true);//2
//为number类型 另一侧为引用类型
console.log(1+{})
//对象 在表达式 if===数字或者字符串 toString()
//对象提供了value类型转换
console.log(3*{valueOf:function(){return 5}})
console.log(3+{},3*{})
console.log({}+{});