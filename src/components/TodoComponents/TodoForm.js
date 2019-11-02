import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
        todoName: '',
        clearTodo: false
    }
  }



  handleChanges = e => {
      console.log(this.state.clearTodo);

    this.setState({
      todoName: e.target.value
    });

    e.target.value = '';
        
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoName);
    this.setState({
      todoName: ""
    });

  };

  handleAlternate = e => {
      this.props.clearTodo();
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="addTodo"          
        />
        <button>Add Todo</button>
        <button onClick={this.handleAlternate.bind(this)}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;