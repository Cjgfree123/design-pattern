const log = (target, name, descriptor) => {
  var oldValue = descriptor.value;
  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
};

class Math {
  @log // Decorator
  plus(a, b) {
    return a + b;
  }
}
const math = new Math();

math.add(1, 2); // this will log: Calling plus with 1,2
