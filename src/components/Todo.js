/**
 * Created by Ardy Chen on 11/13/2017.
 */
import React from 'react'
import TodoCreator from '../containers/TodoCreator'
import TodoList from '../containers/TodoList'


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list:[]};
    this.addTodo = this.addTodo.bind(this);
    this.reverseList = this.reverseList.bind(this);
  }

  addTodo = (todo) => {
    const list = this.state.list;
    list.push(todo);
    console.log(todo);
    this.setState({list});
  };

  reverseList = () => {
    this.setState(prevState => ({
      list: prevState.list.reverse()
    }))
  }

  render() {
    return (
      <div id="todo">
        <TodoCreator addTodo={this.addTodo} reverseList={this.reverseList}/>
        <TodoList list={this.state.list}/>
      </div>
    )
  }
}

export default Todo