import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Greetings from "./Grettings";

const tableStyle = {
  background: "beige",
  textAlign: "center",
  width: "50%",
  margin: "0 auto",
  border: "solid",
  borderColor:"black"
};

ReactDOM.render(
  <React.StrictMode>
    <table className="t1" style={tableStyle}>
      <tbody>
      <tr>
        <th>Name</th>
        <th>Birthday</th>
        <th>Mobile no</th>
      </tr>
      <Greetings name="J" bday="1/2" mobileNo="123456" />
      <Greetings name="D" bday="1/2" mobileNo="12345678" />
      <Greetings  name="P" bday="1/2" mobileNo="123456789" />
      </tbody>
    </table>
  </React.StrictMode>,
  document.getElementById("root")
);
