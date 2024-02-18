const layouts = document.querySelectorAll(".layout");

const btn1 = document.getElementById("btn1");
const btn10 = document.getElementById("btn10");

const btn2 = document.getElementById("btn2");
const btn20 = document.getElementById("btn20");

const btn3 = document.getElementById("btn3");
const btn30 = document.getElementById("btn30");

const btn4 = document.getElementById("btn4");
const btn40 = document.getElementById("btn40");

const btn5 = document.getElementById("btn5");
const btn50 = document.getElementById("btn50");

const btn6 = document.getElementById("btn6");
const btn60 = document.getElementById("btn60");

// 浮动布局
btn1.onclick = () => {
  floatLayout();
};
btn10.onclick = () => {
  if (layouts[0].classList.contains("float-layout")) {
    resetLayout(0);
  }
};
const floatLayout = () => {
  if (!layouts[0].classList.contains("float-layout")) {
    layouts[0].classList.add("float-layout");
  }
};

// 绝对定位
btn2.onclick = () => {
  absoluteLayout();
};
btn20.onclick = () => {
  if (layouts[1].classList.contains("absolute-layout")) {
    resetLayout(1);
  }
};
const absoluteLayout = () => {
  if (!layouts[1].classList.contains("absolute-layout")) {
    layouts[1].classList.add("absolute-layout");
  }
};

// flexbox 解决方案
btn3.onclick = () => {
  flexboxLayout();
};
btn30.onclick = () => {
  if (layouts[2].classList.contains("flexbox-layout")) {
    resetLayout(2);
  }
};
const flexboxLayout = () => {
  if (!layouts[2].classList.contains("flexbox-layout")) {
    layouts[2].classList.add("flexbox-layout");
  }
};

// 表格布局
btn4.onclick = () => {
  tableLayout();
};
btn40.onclick = () => {
  if (layouts[3].classList.contains("table-layout")) {
    resetLayout(3);
  }
};
const tableLayout = () => {
  if (!layouts[3].classList.contains("table-layout")) {
    layouts[3].classList.add("table-layout");
  }
};

// 网格布局
btn5.onclick = () => {
  gridLayout();
};
btn50.onclick = () => {
  if (layouts[4].classList.contains("grid-layout")) {
    resetLayout(4);
  }
};
const gridLayout = () => {
  if (!layouts[4].classList.contains("grid-layout")) {
    layouts[4].classList.add("grid-layout");
  }
};

// 圣杯布局
btn6.onclick = () => {
  shengbeiLayout();
};
btn60.onclick = () => {
  if (layouts[5].classList.contains("shengbei-layout")) {
    resetLayout(5);
  }
};
const shengbeiLayout = () => {
  if (!layouts[5].classList.contains("shengbei-layout")) {
    layouts[5].classList.add("shengbei-layout");
  }
};

// 双飞翼布局
btn7.onclick = () => {
  shuangfeiyiLayout();
};
btn70.onclick = () => {
  if (layouts[6].classList.contains("shuangfeiyi-layout")) {
    resetLayout(6);
  }
};
const shuangfeiyiLayout = () => {
  if (!layouts[6].classList.contains("shuangfeiyi-layout")) {
    layouts[6].classList.add("shuangfeiyi-layout");
  }
};

// 重置样式
const resetLayout = (index) => {
  layouts[index].classList.remove(
    "float-layout",
    "absolute-layout",
    "flexbox-layout",
    "table-layout",
    "grid-layout",
    "shengbei-layout",
    "shuangfeiyi-layout"
  );
};
