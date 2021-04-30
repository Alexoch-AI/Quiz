import '../../App.css'

import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'


const Elem = ({ text, i, them, id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [input, setInput] = useState('')
  
  const inputHandler = (e) => {
    setInput(e.target.value)
  }



  const addHandler = async (input) => {
    const response = await fetch('http://localhost:3000/answer',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answer: input,
        text,
        i,
        them
      })
    })
    if (response.status === 200) {
      alert('ШУЕ')
    } 
    if (response.status === 400) {
      alert('НЕ ШУЕ')
    }

  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addHandler(input)
      handleClose()
      setInput('')
    }

  }
  console.log(them);

  return (
    <>
      <div variant="primary" onClick={handleShow} className="col-md-2 Services-tab item">
        <div className="folded-corner service_tab_1">
          <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
            <div className="item-title">
              <h3> {i}</h3>
            </div>

          </div>
        </div>
      </div>


      <Modal className='modal-question' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{them.quest.theme}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <form onSubmit={submitHandler} >
            <input value={input} onChange={inputHandler} type="text" />
            <Button type='submit' variant="secondary">
              OK
          </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Elem

