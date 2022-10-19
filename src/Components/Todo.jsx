import ShowTodo from "./ShowTodo";
import TodoForm from "./TodoForm";
import "./Todo.css";
import DeleteTodoButton from "./DeleteTodoButton";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos } from "../apiCalls";

function Todo() {
  const queryClient = useQueryClient();

  const { data } = useQuery(["todos"], getTodos, {
    suspense: true,
    useErrorBoundary: true,
  });

  const deleteItem = (taskIdToDelete) => {
    const finalData = data.filter((curEle) => {
      return curEle.id !== taskIdToDelete;
    });
    queryClient.setQueryData(["todos"], finalData);
  };
  const addToDo = (todo) => {
    queryClient.setQueryData(["todos"], [todo, ...data]);
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
          <TodoForm onSuccess={addToDo} />

          {data.map(({ task, id }, index) => {
            return (
              <ShowTodo
                key={id}
                id={id}
                task={task}
                onEdit={(updatedText) => {
                  queryClient.setQueryData(
                    ["todos"],
                    data.map((todo, i) => {
                      if (i === index) {
                        return {
                          ...todo,
                          task: updatedText,
                        };
                      }
                      return todo;
                    })
                  );
                }}
              >
                <DeleteTodoButton id={id} onSuccess={deleteItem} />
              </ShowTodo>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
