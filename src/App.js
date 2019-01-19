import React, { Component } from 'react'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

/**
 * Load components
 */
import Todo from './components/Todo.component'
import TodoList from './components/TodoList.component'

/**
 * Load stores
 */
import TodoStore from './stores/Todo.store'

configure({ enforceActions: true })

const todoStore = new TodoStore()

class App extends Component {

  render() {
    return (
      <Provider todoStore = {todoStore}>
        <div>
          <Todo></Todo>
          <TodoList></TodoList>
        </div>
      </Provider>
    )
  }
}

export default App
