/**
 * step1 定义鸭子、伙计的抽象类
 */
// 鸭子抽象类
var Duck = function(){

};
Duck.prototype.fly = function(){
    throw new Error("该方法必须被重写!");
};
Duck.prototype.quack = function(){
    throw new Error("该方法必须被重写!");
}

// 火鸡抽象类
var Turkey = function(){

};
Turkey.prototype.fly = function(){
    throw new Error(" 该方法必须被重写 !");
};
Turkey.prototype.gobble = function(){
    throw new Error(" 该方法必须被重写 !");
};

/**
 * step2 定义鸭子、火鸡的构造函数
 */
//鸭子
var MallardDuck = function () {
    Duck.apply(this);
};
MallardDuck.prototype = new Duck(); //原型是Duck
MallardDuck.prototype.fly = function () {
    console.log("可以飞翔很长的距离!");
};
MallardDuck.prototype.quack = function () {
    console.log("嘎嘎！嘎嘎！");
};

//火鸡
var WildTurkey = function () {
    Turkey.apply(this);
};
WildTurkey.prototype = new Turkey(); //原型是Turkey
WildTurkey.prototype.fly = function () {
    console.log("飞翔的距离貌似有点短!");
};
WildTurkey.prototype.gobble = function () {
    console.log("咯咯！咯咯！");
};

/**
 * step3 为了让火鸡也支持quack方法，我们创建了一个新的火鸡适配器TurkeyAdapter：
 */
var TurkeyAdapter = function(oTurkey){
    Duck.apply(this);
    this.oTurkey = oTurkey;
};
TurkeyAdapter.prototype = new Duck();
// 嘎嘎
TurkeyAdapter.prototype.quack = function(){
    this.oTurkey.gobble();
};
// 飞起来
TurkeyAdapter.prototype.fly = function(){
    var nFly = 0;
    var nLenFly = 5;
    for(; nFly < nLenFly;){
        this.oTurkey.fly();
        nFly = nFly + 1;
    }
    console.log("飞", nFly);
};

/**
 * step4 测试一下便可以知道结果了：
 */
// var oMallardDuck = new MallardDuck();
var oWildTurkey = new WildTurkey();
var oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

//原有的鸭子行为
// oMallardDuck.fly();
// oMallardDuck.quack();

//原有的火鸡行为
// oWildTurkey.fly();
// oWildTurkey.gobble();

// //适配器火鸡的行为（火鸡调用鸭子的方法名称）
oTurkeyAdapter.fly();
oTurkeyAdapter.quack();
