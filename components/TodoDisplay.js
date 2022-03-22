app.component('todo-display', {
  data () {
    return {
      todoItems: []
    }
  },
  template:
  /* html */
  `<div class="todo-display">
    <todo-form @todo-submitted="$_addTodoItem"></todo-form>
    <todo-list @set-items="$_setTodoItems" @check-item="$_checkItem" @delete-item="$_deleteItem" :todoItems="this.todoItems"></todo-list>
  </div>`,
  methods: {
    $_addTodoItem (todoItem) {
      this.todoItems.push(todoItem)

      localStorage.setItem('todoIndex', todoItem.keyIndex + 1)
      localStorage.setItem(`checked${todoItem.keyIndex}`, todoItem.checked)
      localStorage.setItem(`content${todoItem.keyIndex}`, todoItem.content)
    },
    $_setTodoItems (todoItems) {
      this.todoItems = todoItems
    },
    $_checkItem (todoItem) {
      this.todoItems[todoItem.keyIndex].checked = !this.todoItems[todoItem.keyIndex].checked
      localStorage.setItem(`checked${String(todoItem.keyIndex)}`, this.todoItems[todoItem.keyIndex].checked)
    },
    $_deleteItem (todoItem) {
      this.todoItems.splice(todoItem.keyIndex, 1)
      localStorage.removeItem(`content${todoItem.keyIndex}`)
      localStorage.removeItem(`checked${todoItem.keyIndex}`)
    }
  }
})
