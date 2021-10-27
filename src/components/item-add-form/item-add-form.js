import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
    };
  }
  onLabelChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  onSubmit = (e) => {
    // щоб браузер не перезагружав сторінку, бо ця дія - за замовчуванням для форми
    e.preventDefault();

    this.props.onItemAdded(this.state.newItem);
    this.setState({
      newItem: "",
    });
  };
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          // onChange для отримання актуального значення (останнього)
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.newItem}
        />
        <button
          className="btn btn-outline-secondary"
          //it necessary to create arrow function, to avoid auto executing
          //   onClick={() => this.props.onItemAdded("Added Item")}
        >
          Add
        </button>
      </form>
    );
  }
}
