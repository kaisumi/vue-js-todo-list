app.component('todo-form', {
  template:
  /*html*/
  `<form class="todo-form" @submit.prevent="onSubmit">
    <input id="checked" type="checkbox" v-model="checked">
    <input id="content" type="text" v-model="content">
  </form>`,
  data() {
    return {
      checked: false,
      content: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.content === '') return

      let todoItem = {
        checked: this.checked,
        content: this.content
      }
      this.$emit('todo-submitted', todoItem)

      this.checked = false
      this.content = ''
    }
  }
})
