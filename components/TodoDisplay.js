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
    <todo-list
      @set-items="$_setTodoItems"
      @check-item="$_checkItem"
      @delete-item="$_deleteItem"
      @update-item="$_updateItem"
      :todoItems="this.todoItems"
    ></todo-list>
  </div>`,
  methods: {
    $_addTodoItem (todoItem) {
      this.todoItems.push(todoItem)
      setData(this.todoItems)
    },
    $_setTodoItems (todoItems) {
      this.todoItems = todoItems
      setData(this.todoItems)
    },
    $_checkItem (index) {
      this.todoItems[index].checked = !this.todoItems[index].checked
      setData(this.todoItems)
    },
    $_deleteItem (index) {
      this.todoItems.splice(index, 1)
      setData(this.todoItems)
    },
    $_updateItem (index, content) {
      this.todoItems[index].content = content
      setData(this.todoItems)
    }
  },
  mounted () {
    this.todoItems = getData()
  }
})
function setData (data) {
  localStorage.setItem('data', JSON.stringify(data))
}
function getData () {
  const data = JSON.parse(localStorage.getItem('data'))
  return data === null ? [] : data
}
