import { useState } from "react";

function Registarion() {

  const [inputName, setInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function inputHandlerName(e) {
    setInputName(e.target.value);
  }

  function inputHandlerEmail(e) {
    setInputEmail(e.target.value);
  }

  function inputHandlerPassword(e) {
    setInputPassword(e.target.value);
  }

  const addHandler = async (name, email, password) => {
    const response = await fetch("http://localhost:3000/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });
    const responseStatus = response.status;
    console.log(responseStatus);
  };

  function submitHandler(e) {
    e.preventDefault();
    if (inputName.trim() && inputEmail.trim() && inputPassword.trim()) {
      addHandler(inputName.trim(), inputEmail.trim(), inputPassword.trim());
      setInputName("");
      setInputEmail("");
      setInputPassword("");
    }
  }

  return (
    <form onSubmit={submitHandler} className='align-items-center justify-content-center'>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          onChange={inputHandlerName}
          value={inputName}
          name="name"
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="NameHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          onChange={inputHandlerEmail}
          value={inputEmail}
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          onChange={inputHandlerPassword}
          value={inputPassword}
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Registarion;
