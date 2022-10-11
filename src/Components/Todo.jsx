import React, { useEffect, useState } from "react";
import ShowTodo from "./ShowTodo";
import TodoForm from "./TodoForm";
import axios from "axios";

import "./Todo.css";
import DeleteTodoButton from "./DeleteTodoButton";
function Todo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const url = new URL("http://localhost:3000/todos");
    // url.searchParams.set("_sort", "createdAt");
    // url.searchParams.set("_order", "desc");
    axios
      .get("http://localhost:3000/todos", {
        params: {
          _sort: "createdAt",
          _order: "desc",
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
    // fetch(url.toString())
    //   .then((res) => res.json())
    //   .then((todoData) => {
    //     setData(todoData);
    //     setLoading(false);
    //   });
  }, []);

  const deleteItem = (taskIdToDelete) => {
    const finalData = data.filter((curEle) => {
      return curEle.id !== taskIdToDelete;
    });
    setData(finalData);
  };
  const addToDo = (todo) => {
    setData([todo, ...data]);
  };
  if (loading) {
    return (
      <div
        style={{ width: "100vw", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="spinner-border" role="status" />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col  p-2">
              <h4 className="text-center">Todo App </h4>
            </div>
          </div>
          <TodoForm onSuccess={addToDo} />

          {data.map(({ task, id }, index) => {
            return (
              <ShowTodo
                key={id}
                id={id}
                task={task}
                onEdit={(updatedText) => {
                  data[index].task = updatedText;
                  setData([...data]);
                }}
              >
                <DeleteTodoButton id={id} onSuccess={deleteItem}/>
                </ShowTodo>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
