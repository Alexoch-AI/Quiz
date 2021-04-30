import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const user = localStorage.getItem("id");

  const logoutHandler = async () =>{
    await fetch('http://localhost:3000/user/logout')
    localStorage.clear()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              user ?
                <>
                  <li className="nav-link active" aria-current="page">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Моя игра
                    </Link>
                  </li>
                  <li className="nav-link active" aria-current="page">
                    <Link className="nav-link active" aria-current="page" to="/profile">
                      Личный кабинет
                    </Link>
                  </li>
                  <li className="nav-link active" aria-current="page">
                      <button onClick={logoutHandler}>Выйти</button>
                  </li>
                </>
                :
                <>
                  <li className="nav-link active" aria-current="page">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Моя игра
                 </Link>
                  </li>
                  <li className="nav-link active" aria-current="page">
                    <Link className="nav-link active" aria-current="page" to="/login" >
                      Войти
                </Link>
                  </li>
                  <li className="nav-link active" aria-current="page">
                    <Link className="nav-link active" aria-current="page" to="/registration" >
                      Регистрация
              </Link>
                  </li>
                </>
            }
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Header;
