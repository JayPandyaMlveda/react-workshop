import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const [radioBtn, setRadioBtn] = useState("option2");
  const [selectBox, setSelectBox] = useState("");

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [checkBoxError, setCheckBoxError] = useState();

  //console.log(selectBox)
  /**
   *
   * @type {import("react").FormEventHandler<any>}
   */
  const onSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError || checkBoxError) {
      alert("Please complete form");
    } else {
      alert("Form submitted successfully");
    }
    console.log({ email, password, checkBox, radioBtn, selectBox });
  };

  return (
    <div className="container mt-5">
      <form noValidate onSubmit={onSubmit}>
        <div>
          <h1>Sign up</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            //className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!e.target.value) {
                setEmailError("Please Enter Email");
                return;
              }
              const emailRg =
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
              if (emailRg.test(e.target.value)) {
                setEmailError(null);
                //console.log(e.target.value);
              } else {
                setEmailError("Enter valid email");
                //console.log(e.target.value);
              }
            }}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            //className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            className={`form-control ${passwordError ? "is-invalid" : ""}`}
            onChange={(e) => {
              setPassword(e.target.value);
              if (!e.target.value) {
                setPasswordError("Please Enter Password");
                return;
              }
              const passwordCheck = e.target.value;
              if (passwordCheck.length < 7) {
                setPasswordError("Minimum length of password is 8 letter");
              } else {
                setPasswordError(null);
              }
            }}
          />
          {passwordError && (
            <div className="invalid-feedback">{passwordError}</div>
          )}
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            //className="form-check-input"
            className={`form-check-input ${checkBoxError ? "is-invalid" : ""}`}
            id="exampleCheck1"
            checked={checkBox}
            onChange={(e) => {
              setCheckBox(e.target.checked);
              if (!e.target.checked) {
                setCheckBoxError("Please accept t&C");
              } else {
                setCheckBoxError(null);
              }
            }}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I accept t &amp;C
          </label>
          {checkBoxError && (
            <div className="invalid-feedback">{checkBoxError}</div>
          )}
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            checked={radioBtn === "option1"}
            value="option1"
            onChange={(e) => setRadioBtn(e.target.value)}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            checked={radioBtn === "option2"}
            value="option2"
            onChange={(e) => setRadioBtn(e.target.value)}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Female
          </label>
        </div>

        <select
          value={selectBox}
          className="form-select form-select-sm mt-3"
          onChange={(e) => setSelectBox(e.target.value)}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="CANADA">CANADA</option>
          <option value="U.K">U.K</option>
        </select>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
