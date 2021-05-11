// todo app

// 使用命名空间包裹
namespace Todo {

  interface IApp {
    addTodo: () => void;
  }

  export class App implements IApp {
    addTodo() {
      console.log(Todo.TodoItem)
    }
  }

}

// export 会使用模块导出, 使用命名空间的话, 就不用使用模块导出了, 但是需要手动引入
// export default Todo