/**
 * Created by Ardy Chen on 11/13/2017.
 */
import React from 'react'

class TodoCreator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todo:''};
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    this.setState({
      todo: e.target.value,
    })
  }

  render() {
    return (
      <div id="todoCreatorWrapper">
        <div id="todoCreator">
          <div>
            <input id="todoInput"  type="text" placeholder="Add todo here" value={this.state.todo} onChange={this.handleInput}/>
            <button id="addTodoBtn" onClick={() => {this.props.addTodo(this.state.todo)}}>Add</button>
            <button id="reverseTodoBtn" onClick={this.props.reverseList}>Reverse</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoCreator