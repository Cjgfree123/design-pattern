var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 如果允许接收父类，则一定可以接受子类。
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.buy = function () {
        console.log("买");
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(sex, name) {
        var _this = _super.call(this) || this;
        _this.sex = sex;
        _this.name = name;
        return _this;
    }
    Man.prototype.buy = function () {
        console.log("买ipad");
    };
    return Man;
}(Person));
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(sex, name) {
        var _this = _super.call(this) || this;
        _this.sex = sex;
        _this.name = name;
        return _this;
    }
    Woman.prototype.buy = function () {
        console.log("买包");
    };
    return Woman;
}(Person));
var jiang = {
    marry: function (p) {
        console.log("\u848B\u8001\u5E08\u548C" + p.name + "\u7ED3\u5A5A");
    }
};
jiang.marry(new Woman("女", "范冰冰"));
