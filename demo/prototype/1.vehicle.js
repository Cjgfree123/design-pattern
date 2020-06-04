var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },
    getModel: function () {
        console.log('车辆模具是：' + this.model);
    }
};


function vehicle(model) {
    function F() { };
    // 原型模式，就是创建一个共享的原型，通过拷贝这个原型来创建新的类，用于创建重复的对象，带来性能上的提升。
    F.prototype = vehiclePrototype;

    var f = new F();

    f.init(model);
    return f;
}

var car = vehicle('福特Escort');
car.getModel();