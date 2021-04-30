import { useState } from "react";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function inputHandlerEmail(e) {
    setInputEmail(e.target.value);
  }

  function inputHandlerPassword(e) {
    setInputPassword(e.target.value);
  }

  const addHandler = async (email, password) => {
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const responseServer = await response.json()
    localStorage.setItem('id', JSON.stringify(responseServer._id))
  };

  function submitHandler(e) {
    e.preventDefault();
    if (inputEmail.trim() && inputPassword.trim()) {
      addHandler(inputEmail.trim(), inputPassword.trim());
      setInputEmail("");
      setInputPassword("");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          onChange={inputHandlerEmail}
          value={inputEmail}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Пароль</label>
        <input
          value={inputPassword}
          onChange={inputHandlerPassword}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Отправить
      </button>
    </form>
  );
}

export default Login;
