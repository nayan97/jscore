function AddToDo() {
  return (
    <div class="container items-container">
      <div class="row rows">
        <div class="col-6">
          <input type="text" placeholder="Enter ToDo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success fix-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
