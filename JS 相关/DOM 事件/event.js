const target = document.getElementById("target");
const section = document.querySelector(".section");
const article = document.querySelector(".article");
const output = document.getElementById("output");

const handleClick = (e) => {
  output.textContent += `你在 ${e.currentTarget.tagName} 元素上进行了点击\n`;
  console.log(`${e.currentTarget.tagName} 捕获`);
};

target.addEventListener("click", handleClick, true); // 默认值 false (代表冒泡阶段触发), true (代表捕获阶段触发)

window.addEventListener(
  "click",
  () => {
    output.textContent += `你在 WINDOW 元素上进行了点击\n`;
    console.log("WINDOW 捕获");
  },
  true
);

document.addEventListener(
  "click",
  () => {
    output.textContent += `你在 DOCUMENT 元素上进行了点击\n`;
    console.log("DOCUMENT 捕获");
  },
  true
);

document.documentElement.addEventListener("click", handleClick, true);

document.body.addEventListener("click", handleClick, true);

section.addEventListener("click", handleClick, true);

article.addEventListener("click", handleClick, true);

const eve = new Event("test");
target.addEventListener("test", function () {
  console.log("test dispatch");
});
setTimeout(function () {
  target.dispatchEvent(eve);
}, 1000);
