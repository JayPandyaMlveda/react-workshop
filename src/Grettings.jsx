import logo from "./logo.svg";
import "./Grettings.css";

function Grettings(props) {
  console.log(props);

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.bday}</td>
      <td>{props.mobileNo}</td>
    </tr>
  );
}

export default Grettings;
