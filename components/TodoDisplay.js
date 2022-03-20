app.component('todo-display', {
  data(){
    return {
      todo_items: []
    }
  },
  template:
  /*html*/
  `<div class="todo-display">
    <todo-form @todo-submitted="addTodoItem"></todo-form>
    <todo-list :todo_items="todo_items"></todo-list>
  </div>`,
  methods: {
    addTodoItem(todo) {
      this.todo_items.push(todo)

      localStorage.setItem('todo_index', todo.key_index + 1)
      localStorage.setItem(`checked${todo.key_index}`, todo.checked)
      localStorage.setItem(`content${todo.key_index}`, todo.content)
    }
  }
})
