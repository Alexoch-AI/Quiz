import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";



function Cabinet() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(res => res.json())
      .then(questsFromServer => setQuestions(questsFromServer))
  }, [])
  console.log(questions);

  return (
    <form>
      <h2>Добро пожаловать в Игру. Начнём?</h2>
      {/* <Link to="/game"><button><b>Счёт древних шизов, Вики-статья о столах, Аниме</b></button></Link> */}
      
    </form>
  );
}

export default Cabinet;