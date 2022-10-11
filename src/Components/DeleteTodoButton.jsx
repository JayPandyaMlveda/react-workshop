import axios from "axios";
import { useState } from "react";

function DeleteTodoButton({ id, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onClick() {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      onSuccess(id);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  if (error) {
    throw error;
  }
  return (
    <button style={{ opacity: loading ? 0.5 : 1 }} onClick={onClick}>
      X
    </button>
  );
}

export default DeleteTodoButton;
