Function.prototype.myApply = function (context, args) {
  const self = this;
  context = context || globalThis; // 默认为全局对象 globalThis/window

  const randomKey = Symbol("apply"); // 通过 Symbol 声明一个唯一的key值

  // 将当前函数设置为传入对象的属性
  context[randomKey] = self;

  // 执行函数并传入参数数组
  const result = context[randomKey](...args);

  // 删除添加的属性
  delete context[randomKey];

  return result;
};

// 示例用法
function introduce(name, age) {
  console.log(`My name is ${name} and I am ${age} years old.`);
}

const personInfo = { name: "Bob", age: 30 };
introduce.myApply(personInfo, ["Alice", 25]); // 输出：My name is Alice and I am 25 years old.
