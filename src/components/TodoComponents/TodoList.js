// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
        list: props.list
      }

  }

  render() {
    return (
      <div>
        {this.state.list.map(item => {
          return (
            <div>
              <Todo item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoList;

