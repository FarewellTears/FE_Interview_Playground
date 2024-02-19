// 第三方库 clipboard-copy 源码如下

const makeError = () => {
  throw new DOMException("The request is not allowed", "NotAllowedError");
};

// 1. 优先使用 Clipboard API
const copyClipboardApi = async (text) => {
  if (!navigator.clipboard) {
    console.log("浏览器不支持 Clipboard API");
    throw makeError();
  }
  return navigator.clipboard.writeText(text);
};

// 2. 使用 Selection API/Range API 选中 + execCommand 复制
// 现成第三方库 select.js (https://github.com/zenorocha/select)
const copyExecCommand = async (text) => {
  // 将要复制的内容拷贝到 <span> 中
  const span = document.createElement("span");
  span.textContent = text;

  // 保留连续的空格和换行符
  span.style.whiteSpace = "pre"; // 保留空白序列
  span.style.userSelect = "all";

  // 将 <span> 插入到页面中
  document.body.appendChild(span);

  // 选中代码
  const selection = window.getSelection();
  const range = document.createRange();
  selection.removeAllRanges();
  // RangeAPI: 制造区域
  range.selectNode(span);
  // Selection: 选中区域
  selection.addRange(range);

  // 复制代码到剪切板
  let success = false;
  try {
    success = document.execCommand("copy");
  } finally {
    // 取消选中代码删除 <span>
    selection.removeAllRanges();
    document.body.removeChild(span);
  }
  if (!success) throw makeError();
};

const clipboardCopy = async (text) => {
  try {
    await copyClipboardApi(text);
  } catch (err) {
    // ...Otherwise, use document.execCommand() fallback
    try {
      await copyExecCommand(text);
    } catch (err2) {
      throw err2 || err2 || makeError();
    }
  }
};

module.exports = clipboardCopy;
