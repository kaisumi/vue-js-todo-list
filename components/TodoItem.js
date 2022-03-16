app.component('todo-item', {
  props: {
    todo_item: {
      type: Object,
      required: true
    },
    todo_items: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  template:
  /*html*/
  `<input type="checkbox" :value="this.todo_item.checked">
  <input type="text" :value="this.todo_item.content">
  <input type="button" value="x" v-on:click="deleteItem">`,
  methods: {
    deleteItem() {
      this.todo_items.splice(this.index, 1)
    }
  }
})
