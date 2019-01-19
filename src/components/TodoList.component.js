import React, { Component} from 'react'
import { inject, observer } from 'mobx-react';

@inject("todoStore")
@observer
class TodoList extends Component {
    render() {
        const store = this.props.todoStore
        
        return (
            <div>
                <h1>Liste des tâches</h1>
                {store.todos.join(', ')}
            </div>
        )
    }
}

export default TodoList