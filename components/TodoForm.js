app.component('todo-form', {
  template:
  /* html */
  `<form
    class="todo-form"
    @submit.prevent="$_onSubmit"
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
  data () {
    return {
      checked: false,
      content: ''
    }
  },
  methods: {
    $_onSubmit () {
      if (this.content === '') return

      const todoItem = {
        checked: this.checked,
        content: this.content
      }
      this.$emit('todo-submitted', todoItem)

      this.checked = false
      this.content = ''
    }
  }
})
