app.component('todo-form', {
  template:
  /*html*/
  `<form
    class="todo-form"
    @submit.prevent="onSubmit"
  >
    <input
      id="checked"
      type="checkbox"
      v-model="checked"
    >
    <input
      id="content"
      type="text"
      v-model="content"
    >
  </form>`,
  data() {
    return {
      key_index: '',
      checked: false,
      content: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.content === '') return

      const storage_index = localStorage.getItem('todo_index')
      let index = 0
      if (!isNaN(parseInt(storage_index))) index = parseInt(storage_index)
      let todo_item = {
        key_index: index,
        checked: this.checked,
        content: this.content
      }
      this.$emit('todo-submitted', todo_item)

      this.checked = false
      this.content = ''
    }
  }
})
