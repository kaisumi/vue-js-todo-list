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
    addTodoItem(todoItem) {
      this.todoItems.push(todoItem)

      localStorage.setItem('todoIndex', todoItem.keyIndex + 1)
      localStorage.setItem(`checked${todoItem.keyIndex}`, todoItem.checked)
      localStorage.setItem(`content${todoItem.keyIndex}`, todoItem.content)
    }
  }
})
