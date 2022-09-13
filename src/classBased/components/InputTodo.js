import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: "Write a task"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "Write a task"
      });
    } else {
      alert("Please write an item");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
            className="form-container"
      >
        <input type="text"
               className="input-text"
               name="title"
               placeholder={this.state.title}
               onChange={this.handleChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputTodo;