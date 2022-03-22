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
    'delete-item'
  ],
  template:
  /* html */
  `<div class="todo-item-container">
    <ul v-if="$_loadData">
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
        ></todo-item>
      </li>
    </ul>
  </div>`,
  methods: {
    $_emptyDataArray () {
      const dataArray = []
      const dataObject = {
        content: '',
        keyIndex: 0,
        checked: false
      }
      const count = parseInt(localStorage.getItem('todoIndex'))
      for (let k = 0; k <= count; k++) {
        dataArray.push(Object.assign({}, dataObject))
      }
      return dataArray
    },
    $_resetLocalStorage (todoItems) {
      localStorage.clear()
      let i
      for (i = 0; i < todoItems.length; i++) {
        localStorage.setItem(`content${i}`, todoItems[i].content)
        localStorage.setItem(`checked${i}`, todoItems[i].checked)
        todoItems[i].keyIndex = i
      }
      localStorage.setItem('todoIndex', i + 1)
    },
    $_pushData (countEffectives, dataArray) {
      if (countEffectives <= this.todoItems.length) return

      const todoItems = []
      let i
      for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i].content !== '') todoItems.push(dataArray[i])
      }
      this.$_resetLocalStorage(todoItems)
      this.$emit('set-items', todoItems)
    },
    $_checkItem (todoItem) {
      this.$emit('check-item', todoItem)
    },
    $_deleteItem (todoItem) {
      this.$emit('delete-item', todoItem)
    }
  },
  computed: {
    $_loadData: function () {
      const keys = Object.keys(localStorage)
      const dataArray = this.$_emptyDataArray()
      let countEffectives = 0
      let i
      for (i = 0; i < keys.length; i++) {
        let j = 0
        switch (true) {
          case /content(\d+)/.test(keys[i]):
            countEffectives++
            j = parseInt(keys[i].replace(/content(\d+)/, '$1'))
            dataArray[j].content = localStorage.getItem(`content${j}`)
            dataArray[j].keyIndex = j
            break
          case /checked(\d+)/.test(keys[i]):
            j = parseInt(keys[i].replace(/checked(\d+)/, '$1'))
            dataArray[j].checked = (localStorage.getItem(`checked${j}`) === 'true')
            break
        }
      }
      this.$_pushData(countEffectives, dataArray)
      return true
    }
  }
})
