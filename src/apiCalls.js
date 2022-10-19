import axios from "axios";

export const getTodos = () =>
    axios
    .get("http://localhost:3000/todos", {
        params: {
            _sort: "createdAt",
            _order: "desc",
        },
    })
    .then((res) => res.data);