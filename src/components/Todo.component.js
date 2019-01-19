import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject("todoStore")
@observer
class Todo extends Component {
    constructor(props) {
        super()

        this.state = {
            inputValue: ''
        }
    }

    add = () => {
        this.props.todoStore.add(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    updateInputValue = (inputValue) => {
        this.setState({
            inputValue: inputValue.target.value
        })
    }

    render() {
        return (
            <div>
                <input placeholder="Add new" type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                <button onClick={this.add}>+</button>

                {this.props.todoStore.numOfTodo}
            </div>
        )
    }
}

export default Todo