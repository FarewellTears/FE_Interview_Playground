// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 节流函数
// 方式 1：使用定时器
function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}
// 方式 2：使用时间戳
// function throttle(fn, delay) {
//   let last = 0;
//   return function (...args) {
//     const now = +new Date(); // const now = Date.now();
//     if (now - last > delay) {
//       fn.apply(this, args);
//       last = now;
//     }
//   };
// }

// 测试防抖函数
window.onresize = debounce(() => console.log("resize"), 500);

// 测试节流函数
window.onscroll = throttle(() => console.log("scroll"), 500);
