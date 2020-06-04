## 设计模式

### 目录

```
demo
    |__factory工厂
        |__simple.js 简单工厂模式
        |__factory.js 工厂方法模式
        |__abstract.js 抽象工厂模式
    |__single
        |__singleton.js 单例
    |__adapter
        |__turkey.js 火鸡
    |__strategy
        |_salary.js 奖金计算
        |__form.html 表单提交(校验规则)
    |__proxy
        |__preload.html 图片预加载
    |__decorator
        |__1.func.js 函数劫持
        |__2.log.js 装饰器实现函数log
        |__3.descriptor.js 对对象进行包装
        |__4.autoBind.js 自动绑定
    |__prototype
        |__1.vehicle.js 
```

### 概念

- 把客观对象抽象成属性数据和对数据的相关操作，把内部细节和不相关的信息隐藏起来。
- 把同一个类型的客观对象属性数据和操作绑定在一起，封装成类。
- 允许分成不同层次进行抽象，通过继承实现属性和操作的共享
    - 面向对象的分析 OOA
    - 面向对象的设计 OOD
    - 面向对象的编程 OOP
- 写法
    1. 类
    2. public,protected, private
    3. 多态，继承等
    4. 命名空间

### 原则 

> 设计原则SOLID

**Single responsibility principle[单一职责]。**

    例如: 

    dva中request函数:

    (1)处理状态码

    (2)将响应体转成JSON

    (3)单独封装fetch请求。

**Open Closed Principle[开放封闭原则]:**

    (1)对扩展开放，对修改关闭
    (2)增加需求时，扩展新代码，而非修改已有代码

**Liskov Substitution Principle[里氏替换原则]:**
    (1)子类能覆盖父类
    (2)父类能出现的地方，子类就能出现。

**Interface Segregation Principle[接口隔离原则]:**

    (1)保持接口的单一独立，避免出现胖接口
    (2)JS中没有接口，使用较少
    (3)类似于单一职责原则，更关注接口

**Dependence Inversion Principle [依赖倒置原则]:**

    (1)面向接口编程，依赖于抽象而不依赖于具体实现
    (2)使用方只关注接口而不关注具体类的实现
    (3)JS中使用较少（没有接口，弱类型）


# demo

### 一、创建型

##### 工厂模式

> 参考: https://juejin.im/post/5b69c699e51d45348a301ef4

1. simple.js 简单工厂模式 

(简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂时使用。)

2. factory.js 工厂方法模式 

(将实际创建对象的工作推迟到子类中，这样核心类就变成了抽象类;    
 将工厂方法看作是一个实例化对象的工厂类;  
 可以使用new.target来模拟出抽象类。new.target指向直接被new执行的构造函数，我们对new.target进行判断，如果指向了该类则抛出错误来使得该类成为抽象类。)

3. abstract.js 抽象工厂模式

简单工厂模式和工厂方法模式都是直接生成实例，但是抽象工厂模式不同，抽象工厂模式并不直接生成实例， 而是用于对产品类簇的创建。

**实战**

使用addRoutes + role实现权限路由。

点评: 在实际项目中，因为使用this.$router.addRoutes方法添加的路由刷新后不能保存，所以会导致路由无法访问。通常的做法是本地加密保存用户信息，在刷新后获取本地权限并解密，根据权限重新添加路由。这里因为和工厂模式没有太大的关系就不再赘述。

**使用场景**

将new操作简单封装，遇到new的时候就应该考虑是否用工厂模式；

比如: jq的$、 React的createElement()、Vue的异步组件。

**优点**

外部不许关心内部构造器是怎么生成的，只需调用一个工厂方法生成一个实例即可；

构造函数和创建者分离，符合开放封闭原则

##### 原型模式

1. 概念: 通俗点讲就是创建一个共享的原型，并通过拷贝这些原型创建新的对象。用于创建重复的对象，这种类型的设计模式属于创建型模式。

2. 点评:

优点： 1、性能提高。 2、逃避构造函数的约束。

缺点： 1、配备克隆方法需要对类的功能进行通盘考虑，这对于全新的类不是很难，但对于已有的类不一定很容易，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。 2、必须实现 Cloneable 接口。

### 二、结构型

##### 适配器模式

> 参考: https://segmentfault.com/a/1190000012436538

1. 概念

适配器模式（Adapter）是将一个类（对象）的接口（方法或属性）转化成客户希望的另外一个接口（方法或属性），适配器模式使得原本由于接口不兼容而不能一起工作的那些类（对象）可以一些工作。

2. 使用场景

- 使用一个已经存在的对象，但其方法或属性接口不符合你的要求；
- 你想创建一个可复用的对象，该对象可以与其它不相关的对象或不可见对象（即接口方法或属性不兼容的对象）协同工作；
- 想使用已经存在的对象，但是不能对每一个都进行原型继承以匹配它的接口。对象适配器可以适配它的父对象接口方法或属性。

3. 另外，适配器模式和其它几个模式可能容易让人迷惑，这里说一下大概的区别：

- 适配器和桥接模式虽然类似，但桥接的出发点不同，桥接的目的是将接口部分和实现部分分离，从而对他们可以更为容易也相对独立的加以改变。而适配器则意味着改变一个已有对象的接口。
- 装饰者模式增强了其它对象的功能而同时又不改变它的接口，因此它对应程序的透明性比适配器要好，其结果是装饰者支持递归组合，而纯粹使用适配器则是不可能的。
- 代理模式在不改变它的接口的条件下，为另外一个对象定义了一个代理。

##### 装饰器模式

1. 概念: 

- 装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能。

- JS中的Decorator在原理和功能上简单明了，简而言之就是对对象进行包装，返回一个新的对象描述（descriptor）。这个概念其实和React中的高阶组件也类似。

2. 点评:

- 优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。

- 缺点：多层装饰比较复杂。

- 使用场景： 1、扩展一个类的功能。 2、动态增加功能，动态撤销。

3. js中的装饰器

##### 代理模式

1. 意图：为其他对象提供一种代理以控制对这个对象的访问。

2. 主要解决：在直接访问对象时带来的问题，比如说：要访问的对象在远程的机器上。在面向对象系统中，有些对象由于某些原因（比如对象创建开销很大，或者某些操作需要安全控制，或者需要进程外的访问），直接访问会给使用者或者系统结构带来很多麻烦，我们可以在访问此对象时加上一个对此对象的访问层。

3. 何时使用：想在访问一个类时做一些控制。

4. 如何解决：增加中间层。

5. 关键代码：实现与被代理类组合。

6. 优点： 1、职责清晰。 2、高扩展性。 3、智能化。

   缺点： 1、由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。 2、实现代理模式需要额外的工作，有些代理模式的实现非常复杂。

### 三、行为型

##### 策略模式

参考: https://www.runoob.com/design-pattern/strategy-pattern.html, https://juejin.im/entry/59e565f35188250989512689

1. 策略模式指的是 定义一系列的算法，把它们一个个封装起来，将不变的部分和变化的部分隔开，实际就是将算法的使用和实现分离出来。

2. 意图：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

3. 主要解决：在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。

4. 何时使用：一个系统有许多许多类，而区分它们的只是他们直接的行为。

5. 如何解决：将这些算法封装成一个一个的类，任意地替换。

6. 优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。

   缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。

7. 使用场景： 1、如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。 2、一个系统需要动态地在几种算法中选择一种。 3、如果一个对象有很多的行为，如果不用恰当的模式，这些行为就只好使用多重的条件选择语句来实现。

8. 注意事项：如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。

## J2EE 模式

##### MVC 模式