// edit enable then change h6 to input and change edit button text to cancle text and also show save button
// once click on cancle button then change it to edit and change input to h6

import axios from "axios";
import { useState } from "react";

function ShowTodo({ task, id, children, onEdit }) {
  const [editEnable, setEditEnable] = useState(false);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function onSaveClick() {
    setLoading(true);
    setError(null);
    try {
      await axios.put(`http://localhost:3000/todos/${id}`, {
        task: inputText,
      });
      onEdit(inputText);
      setEditEnable(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  if (error) {
    throw error;
  }
  return (
    <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
      {editEnable && (
        <input
          disabled={loading}
          value={inputText}
          style={{ flexGrow: 1 }}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}
      {!editEnable && <h6 style={{ flexGrow: 1 }}>{task}</h6>}

      {children}
      <button
        disabled={loading}
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
          disabled={loading}
          className="btn btn-primary"
          onClick={onSaveClick}
        >
          Save
        </button>
      )}
    </div>
  );
}

export default ShowTodo;
