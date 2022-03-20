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
    <ul v-if="loaded">
      <li
        v-for="(todo_item, index) in todo_items"
        :key="index"
      >
        <todo-item
          :todo_items="this.todo_items"
          :todo_item="todo_item"
          :index="index"
        ></todo-item>
      </li>
    </ul>
  </div>`,
  computed: {
    resetLocalStorage: function() {
      localStorage.clear()
      for (i = 0; i < this.todo_items.length; i++) {
        localStorage.setItem(`content${i}`, this.todo_items[i].content)
        localStorage.setItem(`checked${i}`, this.todo_items[i].checked)
        this.todo_items[i].key_index = i
      }
      localStorage.setItem('todo_index', this.todo_items.length)
      return true
    },
    loaded: function() {
      const keys = Object.keys(localStorage)
      const data_array = []
      const data_object = {
        content: '',
        key_index: 0,
        checked: false
      }
      const count = parseInt(localStorage.getItem('todo_index'))
      for (let k = 0; k <= count; k++) {
        data_array.push(Object.assign({}, data_object))
      }
      let count_effectives = 0
      let i
      for (i = 0; i < keys.length; i++) {
        let j = 0
        switch(true) {
          case /content(\d+)/.test(keys[i]):
            count_effectives++
            j = parseInt(keys[i].replace(/content(\d+)/, '$1'))
            data_array[j].content = localStorage.getItem(`content${j}`)
            data_array[j].key_index = j
            break
          case /checked(\d+)/.test(keys[i]):
            j = parseInt(keys[i].replace(/checked(\d+)/, '$1'))
            data_array[j].checked = (localStorage.getItem(`checked${j}`) === 'true')
            break
        }
      }
      if (count_effectives > this.todo_items.length) {
        for (i = 0; i < data_array.length; i++) {
          if (data_array[i].content !== '') this.todo_items.push(data_array[i])
        }
      }
      this.resetLocalStorage
      return true
    }
  }
})
