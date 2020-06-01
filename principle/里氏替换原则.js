/**
 * 子类能覆盖父类
 */
class Person{
    buy(){
        console.log("买");
    }
}

class Man extends Person{
    buy(){
        console.log("买ipad");
    }
}

class Woman extends Person{
    buy(){
        console.log("买包");
    }
}

let p = new Person();
let man = new Man();
let woman = new Woman();
p.buy();
man.buy();
woman.buy();
