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
  emits: [
    'check-item',
    'delete-item'
  ],
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
      this.$emit('check-item', this.todoItem)
    },
    $_deleteItem () {
      this.$emit('delete-item', this.todoItem)
    },
    $_changeContent () {
      localStorage.setItem(`content${this.todoItem.keyIndex}`, this.todoItem.content)
    }
  }
})
