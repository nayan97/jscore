import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
function App() {


  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>

             
      <div class="row">
          <div class="col-6">
            Take Breackfast
          </div>
          <div class="col-4">
            01/09/2024
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
        
      <div class="row">
          <div class="col-6">
            ready for work
          </div>
          <div class="col-4">
           01/09/2024
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      
    </center>
  );

  
}

export default App
