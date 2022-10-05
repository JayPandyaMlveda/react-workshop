import React, { useState } from "react";

function TodoForm({onSuccess}) {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const newData = { task, createdAt: new Date().toISOString() };
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers,
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        onSuccess(data)
        setTask("");
      });
  };
  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row justify-content-between text-white p-2">
        <div className="form-group flex-fill mb-2 col-9">
          <input
            required
            id="todo-input"
            type="text"
            className="form-control"
            value={task}
            onChange={onChangeHandler}
          />
        </div>
        <button
          style={{ opacity: loading ? 0.5 : 1 }}
          type="submit"
          className="btn btn-primary mb-2 ml-2 col-3"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
