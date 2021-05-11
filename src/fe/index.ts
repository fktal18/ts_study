import TodoItem from './todo_item'

window.onload = init;

// dom中可以直接使用typescript, 最简单的转换是使用requirejs模块, module: amd
function init() {
  let oBtn = document.querySelector('button');
  if (oBtn) {
    oBtn.onclick = clickBtnHander
  }
}

function clickBtnHander() {
  const item = new TodoItem({nm: 'hello'})
  document.body.appendChild(item.render())
}

const arr = [1, 'str', null]

// for of 循环

// item 表示arr中的元素
for (let item of arr) {
  console.log(item)
}

// for in 循环
// i 表示索引
for (let i in arr) {
  console.log(i); // 打印出来竟然是个字符串...
}