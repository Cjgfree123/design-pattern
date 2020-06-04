const log = (srcFun) => {
  if (typeof srcFun !== "function") {
    throw new Error(`the param must be a function`);
  }
  return (...arguments) => {
    console.info(`${srcFun.name} invoke with ${arguments.join(",")}`);
    srcFun(...arguments);
  };
};

const plus = (a, b) => a + b;

const logPlus = log(plus);

logPlus(1, 2); // this will log : plus invoke with 1,2
