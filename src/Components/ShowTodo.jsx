// edit enable then change h6 to input and change edit button text to cancle text and also show save button
// once click on cancle button then change it to edit and change input to h6

import { useState } from "react";


function ShowTodo({ task, id, children, onEdit }) {
  const [editEnable, setEditEnable] = useState(false);
  const [inputText, setInputText] = useState("");

  return (
    <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
      {editEnable && (
        <input
          value={inputText}
          style={{ flexGrow: 1 }}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}
      {!editEnable && <h6 style={{ flexGrow: 1 }}>{task}</h6>}

      {children}
      <button
        className="btn btn-light ml-4"
        onClick={() => {
          setEditEnable(!editEnable);
          if (!editEnable) {
            setInputText(task);
          }
        }}
      >
        {editEnable ? "Cancel" : "Edit"}
      </button>
      {editEnable && (
        <button
          className="btn btn-primary"
          onClick={() => {
            onEdit(inputText);
            setEditEnable(false);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
}

export default ShowTodo;
