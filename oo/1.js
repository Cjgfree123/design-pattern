class Animal{
    constructor(name){
        this.name = name;
    }
    eat(food){
        console.log(`${this.name} 吃 ${food}`);
    }
}

class Dog extends Animal {
    constructor(){
        super("狗");
    }
    speak(){
        console.log("汪汪汪");
    }
}

class Cat extends Animal {
    constructor(){
        super("猫");
    }
    speak(){
        console.log("喵~");
    }
}

let dog = new Dog("狗");
dog.eat("肉"); // 狗吃肉
dog.speak(); // 汪汪汪

let cat = new Cat();
cat.eat("鱼");
cat.speak();