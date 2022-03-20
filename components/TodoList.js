app.component('todo-list', {
  props: {
    todoItems: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="todo-item-container">
    <ul v-if="loaded">
      <li
        v-for="(todoItem, index) in todoItems"
        :key="index"
      >
        <todo-item
          :todoItems="this.todoItems"
          :todoItem="todoItem"
          :index="index"
        ></todo-item>
      </li>
    </ul>
  </div>`,
  computed: {
    resetLocalStorage: function() {
      localStorage.clear()
      for (i = 0; i < this.todoItems.length; i++) {
        localStorage.setItem(`content${i}`, this.todoItems[i].content)
        localStorage.setItem(`checked${i}`, this.todoItems[i].checked)
        this.todoItems[i].keyIndex = i
      }
      localStorage.setItem('todoIndex', this.todoItems.length)
      return true
    },
    loaded: function() {
      const keys = Object.keys(localStorage)
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
      let countEffectives = 0
      let i
      for (i = 0; i < keys.length; i++) {
        let j = 0
        switch(true) {
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
      if (countEffectives > this.todoItems.length) {
        for (i = 0; i < dataArray.length; i++) {
          if (dataArray[i].content !== '') this.todoItems.push(dataArray[i])
        }
      }
      this.resetLocalStorage
      return true
    }
  }
})
