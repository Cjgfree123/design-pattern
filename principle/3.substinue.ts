/**
 * 父类能出现的地方，子类就能出现。
 * 如果允许接收父类，则一定可以接受子类。
 */
class Person{

    buy(){
        console.log("买");
    }
}

class Man extends Person{
    constructor(sex, name){
        super();
        this.sex = sex;
        this.name = name;
    }
    buy(){
        console.log("买ipad");
    }
}

class Woman extends Person{
    constructor(sex, name){
        super();
        this.sex = sex;
        this.name = name;
    }
    buy(){
        console.log("买包");
    }
}

 let jiang = {
    //  可以传入waman实例
     marry(p: Woman){
        console.log(`蒋老师和${p.name}结婚`);
     }
 }

 jiang.marry(new Woman("女", "范冰冰"));