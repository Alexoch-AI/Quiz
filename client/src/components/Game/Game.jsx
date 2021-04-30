
import { useEffect, useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Theme from "../Theme/Theme";


const Game = () => {


  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/questions')
      .then(res => res.json())
      .then(questsFromServer => setQuestions(questsFromServer))

  }, [])

  console.log(questions)

  // const theme1 = 'Счёт древних шизов'
  // const theme2 = 'Аниме'
  // const theme3 = 'Вики-статья о столах'
  return (
    <div className='board'>
      <Container>
        <Row>
          <Col><Theme quest={questions[0]}/></Col>
        </Row>
        <Row>
          <Col><Theme quest={questions[1]}/></Col>
        </Row>
        <Row>
          <Col><Theme quest={questions[2]}/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Game

