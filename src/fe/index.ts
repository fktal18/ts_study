/// <reference path="./todo_app.ts" />
/// <reference path="./todo_item.ts" />

window.onload = init;

// dom中可以直接使用typescript, 最简单的转换是使用requirejs模块, module: amd
function init() {
  let oBtn = document.querySelector('button');
  if (oBtn) {
    oBtn.onclick = clickBtnHander
  }
}

function clickBtnHander() {
  
}