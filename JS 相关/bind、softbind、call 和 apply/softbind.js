Function.prototype.softBind = function (context = globalThis, ...args) {
  const self = this;
  const BoundFunction = function (...newArgs) {
    // new 的时候和链式调用 softBind 的时候打印
    if (this !== globalThis) {
      console.log("this", this); //  链式调用的时候 { a: 6 }
      console.log("context", context); //{ a: 2 }
    }
    self.apply(
      this instanceof BoundFunction
        ? this
        : !this || this === globalThis
        ? context
        : this,
      [...args, ...newArgs]
    );
  };
  BoundFunction.prototype = Object.create(self.prototype);
  return BoundFunction;
};

/* 手写 softBind 函数测试 */
function f(arg) {
  console.log(this.a, arg);
}

const f2 = f.softBind({ a: 3 })(4); // output: 3, 4

const f3 = f.softBind({ a: 3 }, 5);
f3(); // output: 3, 5
const f4 = f3.softBind({ a: 3 }, 5).softBind({ a: 6 }, 10);
f4(); // output: 6, 5

// f.myBind_call({ a: 3 }, 10)(11); // output: 3, 10

// 示例用法
function greet(name) {
  console.log(`Hello, ${name}! I am ${this.job}.`);
}

const person = { job: "developer" };
const softBoundGreet = greet.softBind(person, "Alice");
softBoundGreet(); // 输出：Hello, Alice! I am developer.

// 使用 new 关键字调用
const aliceGreet = new softBoundGreet("Kevin");
aliceGreet(); // 输出：Hello, Alice! I am undefined.
