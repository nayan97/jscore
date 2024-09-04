import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItemone from "./components/TodoItemone";
import TodoItemtwo from "./components/TodoItemtwo.jsx";
import "./App.css";


function App() {

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="items-container">

      <TodoItemone></TodoItemone>
      <TodoItemtwo/>
      </div>
    </center>
  );

  
}

export default App
