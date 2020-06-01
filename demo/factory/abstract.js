class User {
  constructor(name = "", viewPage = "") {
    if (new.target === User) {
      // 使用new.target来模拟出抽象类。new.target指向直接被new执行的构造函数，我们对new.target进行判断，如果指向了该类则抛出错误来使得该类成为抽象类。
      throw new Error("抽象类不能实例化!");
    }
    this.name = name;
    this.viewPage = viewPage;
  }
}

class UserOfWechat extends User {
  constructor(name, viewPage) {
    super(name, viewPage);
  }
}

class UserOfQq extends User {
  constructor(name, viewPage) {
    super(name, viewPage);
  }
}

class UserOfWeibo extends User{
  constructor(name, viewPage) {
    super(name, viewPage);
  }
}

function getAbstractUserFactory(type) {
  switch (type) {
    case 'wechat':
      return UserOfWechat;
      break;
    case 'qq':
      return UserOfQq;
      break;
    case 'weibo':
      return UserOfWeibo;
      break;
    default:
      throw new Error('参数错误, 可选参数:superAdmin、admin、user')
  }
}

let WechatUserClass = getAbstractUserFactory('wechat');
let QqUserClass = getAbstractUserFactory('qq');
let WeiboUserClass = getAbstractUserFactory('weibo');

let wechatUser = new WechatUserClass('微信小李', "1");
let qqUser = new QqUserClass('QQ小李', "2");
let weiboUser = new WeiboUserClass('微博小李', "3");

console.log(wechatUser.name, wechatUser.viewPage);