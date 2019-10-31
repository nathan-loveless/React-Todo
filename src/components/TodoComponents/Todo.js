// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class Todo extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

  }

  render() {
    return (
      <div>{this.props.item}</div>
    );
  }
}

export default Todo;