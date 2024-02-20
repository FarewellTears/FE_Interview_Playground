/* 1. 手写 bind 函数（通过 apply 实现）*/
Function.prototype.myBind_apply = function (context) {
  // 如果 context 不为函数，就抛出错误
  if (typeof this !== "function") {
    throw new Error("Only functions can be bound.");
  }

  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  // const args = Array.from(arguments).slice(1);

  function BoundFunction() {
    const newArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(newArgs));
  }

  BoundFunction.prototype = Object.create(self.prototype);
  return BoundFunction;
};

/* 2. 手写 bind 函数（通过 call 实现）*/
Function.prototype.myBind_call = function (context, ...args) {
  // 如果 context 不为函数，就抛出错误
  if (typeof this !== "function") {
    throw new Error("Only functions can be bound.");
  }

  const self = this;
  const BoundFunction = function (...newArgs) {
    return self.call(context, ...args, ...newArgs);
  };
  BoundFunction.prototype = Object.create(self.prototype);
  return BoundFunction;
};

/* 3. 手写 bind 函数测试 */
function f(arg) {
  console.log(this.a, arg);
}

f.bind({ a: 3 })(4); // output: 3, 4

const f2 = f.myBind_call({ a: 3 })(4); // output: 3, 4

const f3 = f.myBind_call({ a: 3 }, 5);
f3(); // output: 3, 5
const f4 = f3.myBind_call({ a: 4 }, 6);
f4(); // output: 3, 5

f.myBind_call({ a: 3 }, 10)(11); // output: 3, 10

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
const boundGetX = unboundGetX.myBind_call(module);
console.log(boundGetX());
// Expected output: 42

// 示例用法
function greet(name) {
  console.log(`Hello, ${name}! I am ${this.job}.`);
}

const person = { job: "developer" };
const BoundGreet = greet.myBind_apply(person);
const aliceGreet = new BoundGreet("Alice");
aliceGreet(); // 输出：Hello, Alice! I am developer.
