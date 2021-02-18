import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStyle: {
        display: 'none',
      },
    };
  };

  toggleBodyForm = () => {
    this.state.formStyle.display === 'block'
    ? this.setState({ formStyle: { display: 'none' } })
    : this.setState({ formStyle: { display: 'block' } });
  };

  deleteClickedTodo = () => {
    this.props.deleteTodo(this.props.todo);
  };

  render () {
    return (
      <li data-todos-index={this.props.todo._id}>
        <span className="todo-item">{this.props.todo.body}</span>
        <span 
        className="remove"
        onClick={this.deleteClickedTodo}>
        Remove
        </span>
      </li>
    );
  };
};

export default Todo;