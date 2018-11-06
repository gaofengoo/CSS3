"use strict";

var a = 1;
var _ = 2;
var $ = 3;
console.log(a,_,$);

var aa = 4;
var __ = 5;
var $3 = 6;
console.log(aa,__,$3);

var firstSecond = 7;
var myCar = 8;
var doSomethingImportant = 9;
console.log(firstSecond, myCar, doSomethingImportant);

//dsf asdf asdf 

/*
adf asdf
asdf assdf
asdf adf 
*/

/*
asdf asdfasda
asdf asdf 
asdf asdf 
asdf    
adf 
adf asddf
*/


/*
dfadf asdf aasdfasdf
asdf asdfdfasdf asdfadf adfasdf asdfasdf
asdf asdfasdfa sdf aadf adf adfasdfasdf
asdf adf adf asdf asdf asdf
*/

//指定函数中使用严格模式
function doSomething() {
    "use strict";
    //函数体
}

//语句
var test = true;
if (test){
    test = false;
    alert(typeof(test));
}

//变量
/*
function test2(){
    message = "hi";
}
test2();
alert(message);
*/  

//多行变量
var message2 = "hi",
    found = false,
    age = 20;