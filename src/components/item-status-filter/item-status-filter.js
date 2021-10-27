import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  render() {
    const { onFilterChange, filter } = this.props;
    return (
      <div className="btn-group">
        <button
          type="button"
          className={`btn ${
            filter === "all" ? "btn-info" : "btn-outline-secondary"
          }`}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${
            filter === "active" ? "btn-info" : "btn-outline-secondary"
          }`}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn ${
            filter === "done" ? "btn-info" : "btn-outline-secondary"
          }`}
          onClick={() => onFilterChange("done")}
        >
          Done
        </button>
      </div>
    );
  }
}
