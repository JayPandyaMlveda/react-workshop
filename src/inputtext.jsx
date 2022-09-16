import React, { useState } from "react";

function Inputtext() {
  const [name, setName] = useState({ firstName: "", lastName: "",surName:"" });

  return (
    <div className="container mt-5">
        <form>
  <div className="form-group mt-2 w-50">
    <label>First Name</label>
    <input  type="text"
        value={name.firstName}
        onChange={ e => setName({ ...name,firstName: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Your first name">
    </input>
  </div>
  <div className="form-group mt-2 w-50">
    <label>Last Name</label>
    <input  type="text"
        value={name.lastName}
        onChange={ e => setName({ ...name,lastName: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Your Last name">
    </input>
  </div>
  <div className="form-group mt-2 w-50">
    <label>Surname</label>
    <input  type="text"
        value={name.surName}
        onChange={ e => setName({ ...name,surName: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Your Surname">
    </input>
  </div>
  </form>
  
      
       
      <h2 className="mt-4">
        Your Full Name is {name.firstName}  {name.lastName} {name.surName}
       
      </h2>
    </div>
  );
}

export default Inputtext;
