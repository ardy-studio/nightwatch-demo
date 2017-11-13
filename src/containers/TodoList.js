/**
 * Created by Ardy Chen on 11/13/2017.
 */
import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.constructListItems(props),
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      listItems: this.constructListItems(nextProps),
    })
  }

  constructListItems = (props) => {
    return props.list.map((item) =>
      <li key={item}>
        {item}
      </li>
    );
  }


  render() {
    return (
      <div id="todoListWrapper">
        <ul id="todoList">
          {this.state.listItems}
        </ul>
      </div>
    )
  }
}

export default TodoList