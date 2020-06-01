class User {
  constructor(name = "", viewPage = []) {
    if (new.target === User) {
      // 使用new.target来模拟出抽象类。new.target指向直接被new执行的构造函数，我们对new.target进行判断，如果指向了该类则抛出错误来使得该类成为抽象类。
      throw new Error("抽象类不能实例化!");
    }
    this.name = name;
    this.viewPage = viewPage;
  }
}

class UserFactory extends User {
  constructor(name, viewPage) {
    super(name, viewPage);
  }
  create(role) {
    switch (role) {
      case "superAdmin":
        return new UserFactory("超级管理员", [
          "首页",
          "通讯录",
          "发现页",
          "应用数据",
          "权限管理",
        ]);
        break;
      case "admin":
        return new UserFactory("普通用户", ["首页", "通讯录", "发现页"]);
        break;
      case "user":
        return new UserFactory("普通用户", ["首页", "通讯录", "发现页"]);
        break;
      default:
        throw new Error("参数错误, 可选参数:superAdmin、admin、user");
    }
  }
}

let userFactory = new UserFactory();
let superAdmin = userFactory.create("superAdmin");
let admin = userFactory.create("admin");
let user = userFactory.create("user");

console.log("超管工厂", superAdmin);
