/**
 * 1. 聊天室
 */
class ChatRoom {
  showMsg(user, msg) {
    console.log(new Date().toLocaleDateString() + " [" + user.getName() + "] : " + msg);
  }
}

/**
 * 2. 创建user类
 */
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
      return this.name;
  }

  sendMsg(user, msg) {
    let chatRoom = new ChatRoom();
    chatRoom.showMsg(user, msg);
  }
}

/**
 * 3. 使用User对象，显示他们之间的通信。
 */
class MediatorPatternDemo {
  constructor() {
    let robert = new User("Robert");
    let john = new User("John");

    robert.sendMsg(robert, "Hi! John!");
    john.sendMsg(john, "Hello! Robert!");
  }
}

let media = new MediatorPatternDemo();
