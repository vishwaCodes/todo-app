import React, { Component } from 'react';

class CreateTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  };

  onChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  onInputChange = (event) =>{
    this.setState({
      todo: event.target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    this.setState({
      todo: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input
          onChange={this.onInputChange}
          type="text" id="newItemDescription"
          placeholder="What do you need to do?"
          value={this.state.todo}
          />
          <button type="submit" id="addTask" className="btn">Add Todo</button>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div style={this.props.style} className='todoForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};


export default CreateTodoForm;