import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/appHeader";
import SearchPanel from "./components/searchPanel";
import TodoList from "./components/todoList";

const App = () => {
  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;
  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
