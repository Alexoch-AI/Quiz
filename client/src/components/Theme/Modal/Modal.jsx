
import { useState } from 'react';
import{Modal,Button} from 'react-bootstrap'



function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div variant="primary" onClick={handleShow}>
        Launch demo modal
      </div> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo111, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          
          <input />
           
         
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Example
