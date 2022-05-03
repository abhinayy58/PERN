import { Fragment } from "react";
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo />
      </div>
      <div>
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
