app.component('todo-display', {
  data(){
    return {
      todoItems: []
    }
  },
  template:
  /*html*/
  `<div class="todo-display">
    <todo-form @todo-submitted="addTodoItem"></todo-form>
    <todo-list :todoItems="todoItems"></todo-list>
  </div>`,
  methods: {
    addTodoItem(todo) {
      this.todoItems.push(todo)

      localStorage.setItem('todoIndex', todo.keyIndex + 1)
      localStorage.setItem(`checked${todo.keyIndex}`, todo.checked)
      localStorage.setItem(`content${todo.keyIndex}`, todo.content)
    }
  }
})
