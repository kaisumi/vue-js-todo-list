app.component('todo-list', {
  props: {
    todoItems: {
      type: Array,
      required: true
    }
  },
  emits: [
    'set-items',
    'check-item',
    'delete-item',
    'update-item'
  ],
  template:
  /* html */
  `<div class="todo-item-container">
    <ul>
      <li
        v-for="(todoItem, index) in todoItems"
        :key="index"
      >
        <todo-item
          :todoItems="this.todoItems"
          :todoItem="todoItem"
          :index="index"
          @check-item="$_checkItem"
          @delete-item="$_deleteItem"
          @update-item="$_updateItem"
        ></todo-item>
      </li>
    </ul>
  </div>`,
  methods: {
    $_checkItem (index) {
      this.$emit('check-item', index)
    },
    $_deleteItem (index) {
      this.$emit('delete-item', index)
    },
    $_updateItem (index, content) {
      this.$emit('update-item', index, content)
    }
  }
})
