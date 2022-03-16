app.component('todo-list', {
  props: {
    todo_items: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="todo-item-container">
    <ul>
      <li v-for="(todo_item, index) in todo_items" :key="index">
        <input type="checkbox" :value="todo_item.checked">
        <input type="text" :value="todo_item.content">
        <input type="button" value="x">
      </li>
    </ul>
  </div>`
})
