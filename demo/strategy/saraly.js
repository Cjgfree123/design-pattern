var obj = {
  A: function (salary) {
    return salary * 4;
  },
  B: function (salary) {
    return salary * 3;
  },
  C: function (salary) {
    return salary * 2;
  },
};
var calculateBouns = function (level, salary) {
  return obj[level](salary);
};
console.log(calculateBouns("A", 10000)); // 40000
