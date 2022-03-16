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
    <todo-list v-if="todo_items.length" :todo_items="todo_items"></todo-list>
  </div>`,
  methods: {
    addTodoItem(todo) {
      this.todo_items.push(todo)
    }
  }
})
