
import {Container,Row,Col} from 'react-bootstrap'
import Theme from "../Theme/Theme";


const Game = () => {
  return (
    <div className='board'>
      <Container>
        <Row>
          <Col><Theme /></Col>
        </Row>
        <Row>
          <Col><Theme /></Col>
        </Row>
        <Row>
          <Col><Theme /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Game

