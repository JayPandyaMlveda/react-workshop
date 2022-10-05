import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import "./Todo.css";
function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = { task, id: Date.now() };
    setData([newData, ...data]);

    setTask("");
  };

  const deleteItem = (taskIdToDelete) => {
    const finalData = data.filter((curEle) => {
      return curEle.id !== taskIdToDelete;
    });
    setData(finalData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col  p-2">
              <h4 className="text-center">Todo App </h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={task}
                  onChange={onChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add Task
              </button>
            </div>
          </form>

          {data.map(({ task, id }) => {
            return (
              <ShowTodo key={id} id={id} task={task} onSelcet={deleteItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
