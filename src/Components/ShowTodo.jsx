// edit enable then change h6 to input and change edit button text to cancle text and also show save button
// once click on cancle button then change it to edit and change input to h6

import { useState } from "react";

function ShowTodo(props) {
  const [editEnable, setEditEnable] = useState(false);

  return (
    <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
      {editEnable && <input style={{ flexGrow: 1 }}/>}
      {!editEnable && <h6 style={{ flexGrow: 1 }}>{props.task}</h6>}

      <button
        onClick={() => {
          props.onSelcet(props.id);
        }}
      >
        X
      </button>
      <button
        className="btn btn-light ml-4"
        onClick={() => {
          setEditEnable(!editEnable);
        }}
      >
        {editEnable ? "Cancel" : "Edit"}
      </button>

    </div>
  );
}

export default ShowTodo;
