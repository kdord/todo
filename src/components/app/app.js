import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import "./app.css";

export default class App extends Component {
  maxId = 100;
  constructor() {
    super();
    this.state = {
      todoData: [
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Make App"),
        this.createTodoItem("Have a lunch"),
      ],
      searchField: "",
      filter: "all",
    };

    // this.deleteItem = this.deleteItem.bind(this);
  }

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      // console.log(idx);
      // chaging current state is strictly forbidden
      const todoArr = [...todoData];
      todoArr.splice(idx, 1);
      return {
        todoData: todoArr,
      };
    });
  };

  addItem = (text) => {
    console.log("add");
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      // console.log(todoArr.length);
      return {
        todoData: newArr,
      };
    });
  };
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    console.log("toggle important", id);
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };
  onToggleDone = (id) => {
    console.log("toggle done", id);
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onSearchChange = (text) => {
    console.log(text);
    this.setState({ searchField: text });
  };
  onFilterChange = (filter) => {
    console.log("filter", filter);
    // this.setState({ filter: filter });
    // it could be shorter
    this.setState({ filter });
  };

  filterItems(data, filter) {
    return filter === "all"
      ? data
      : filter === "active"
      ? data.filter((el) => !el.done)
      : filter === "done"
      ? data.filter((el) => el.done)
      : data;
  }
  searchItems(data, searchField) {
    return !searchField
      ? data
      : data.filter((el) =>
          el.label.toLowerCase().includes(searchField.toLowerCase())
        );
  }

  render() {
    const { todoData, searchField, filter } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.filter((el) => !el.done).length;

    const data = this.searchItems(
      this.filterItems(todoData, filter),
      searchField
    );
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            onFilterChange={this.onFilterChange}
            filter={filter}
          />
        </div>
        <TodoList
          todos={data}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
