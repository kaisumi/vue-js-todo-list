app.component('todo-form', {
  template:
  /*html*/
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
  data() {
    return {
      keyIndex: '',
      checked: false,
      content: ''
    }
  },
  methods: {
    $_onSubmit() {
      if (this.content === '') return

      const storageIndex = localStorage.getItem('todoIndex')
      let index = 0
      if (!isNaN(parseInt(storageIndex))) index = parseInt(storageIndex)
      let todoItem = {
        keyIndex: index,
        checked: this.checked,
        content: this.content
      }
      this.$emit('todo-submitted', todoItem)

      this.checked = false
      this.content = ''
    }
  }
})
