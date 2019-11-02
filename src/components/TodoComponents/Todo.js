// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import '../TodoComponents/Todo.css';

class Todo extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    item: this.props.item
  };

  render() {
    let updatedClassCompletion = ' todo';
    if(this.props.item.completed) {
      
      updatedClassCompletion += ' completed'
    }
      
      const handleClick = e => {
        e.preventDefault(); 
        this.props.toggleCompleted(this.props.item.id);
        
      };

    return (
      <div onClick={handleClick} className={updatedClassCompletion}>
      <p>{this.props.item.task}</p>
      </div>
    );
  }
}

export default Todo;