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
  `{{ todo_item.key_index }} {{ todo_item.checked }}
  <input type="checkbox" :checked="this.todo_item.checked" @change="clickCheckbox">
  <input type="text" :value="this.todo_item.content" :v-model="this.todo_item.content" @change="changeContent">
  <input type="button" value="x" v-on:click="deleteItem">`,
  methods: {
    clickCheckbox(){
      this.todo_item.checked = !this.todo_item.checked
      localStorage.setItem(`checked${String(this.todo_item.key_index)}`, this.todo_item.checked)
    },
    deleteItem() {
      this.todo_items.splice(this.index, 1)
      localStorage.removeItem(`content${this.todo_item.key_index}`)
      localStorage.removeItem(`checked${this.todo_item.key_index}`)
    },
    changeContent() {
      console.log(this.todo_item.content)
      localStorage.setItem(`content${this.todo_item.key_index}`, this.todo_item.content)
    }
  }
})
