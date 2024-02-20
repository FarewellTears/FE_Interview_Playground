Function.prototype.myCall = function (context, ...args) {
  const self = this;
  context = context || globalThis; // 默认为全局对象 globalThis/window

  const randomKey = Symbol("call"); // 通过 Symbol 声明一个唯一的key值

  // 将当前函数设置为传入对象的属性
  context[randomKey] = self;

  // 执行函数并传入参数
  const result = context[randomKey](...args);

  // 删除添加的属性
  delete context[randomKey];

  return result;
};

// 示例用法
function greet(name) {
  console.log(`Hello, ${name}! I am ${this.job}.`);
}

const person = { job: "developer" };
greet.myCall(person, "Alice"); // 输出：Hello, Alice! I am developer.
