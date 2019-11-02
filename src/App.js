import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: 'Bake Cookies',
  //   id: 1528817084358,
  //   completed: false
  // }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: todoList
    }
  }

  
  toggleCompleted = todoId => {
    this.setState({
      list: this.state.list.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = todoTask => {
    this.setState({
      list: [
        ...this.state.list,
        {
          task: todoTask,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  clearTodo = () => {
    this.setState({
      list: this.state.list.map(todo => {
        if (todo.completed != false) {
          return {
          };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>        
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} list={this.state.list} />
        <TodoForm addTodo={this.addTodo} clearTodo={this.clearTodo}/>
      </div>
    );
  }
}

export default App;
