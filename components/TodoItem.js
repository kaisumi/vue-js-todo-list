app.component('todo-item', {
  props: {
    todoItem: {
      type: Object,
      required: true
    },
    todoItems: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  template:
  /* html */
  `<input
    type="checkbox"
    :checked="this.todoItem.checked"
    @change="$_clickCheckbox"
  >
  <input
    type="text"
    v-model="this.todoItem.content"
    @change="$_changeContent"
  >
  <input
    type="button"
    value="x"
    @click="$_deleteItem"
  >`,
  methods: {
    $_clickCheckbox () {
      this.todoItem.checked = !this.todoItem.checked
      localStorage.setItem(`checked${String(this.todoItem.keyIndex)}`, this.todoItem.checked)
    },
    $_deleteItem () {
      this.todoItems.splice(this.index, 1)
      localStorage.removeItem(`content${this.todoItem.keyIndex}`)
      localStorage.removeItem(`checked${this.todoItem.keyIndex}`)
    },
    $_changeContent () {
      localStorage.setItem(`content${this.todoItem.keyIndex}`, this.todoItem.content)
    }
  }
})
