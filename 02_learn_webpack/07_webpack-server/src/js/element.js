// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import "../font/iconfont.css";

import jpg5 from "../img/5.jpg"

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，小城"

// 设置背景图片
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

// 设置img元素的src
const imgEl = document.createElement("img");
imgEl.src = jpg5;

// i元素
const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)


console.log("12345");
