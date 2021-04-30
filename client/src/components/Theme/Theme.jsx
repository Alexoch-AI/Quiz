
import './Theme.css'

import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'


const Theme = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h3> Animals</h3>


                </p>
                {/* <p> This is an amazing set of animated accordions based completely on CSS. They come oriented both vertically and horizontally in order to fit properly in your project. In order to see the slides, </p> */}
              </div>
            </div>
          </div>

          <div variant="primary" onClick={handleShow} className="col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h3> 777</h3>
                </p>

              </div>
            </div>
          </div>

          <div variant="primary" onClick={handleShow} className="col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h3> 200</h3>
                </p>

              </div>
            </div>
          </div>
          <div variant="primary" onClick={handleShow} className="col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h3> 300</h3>
                </p>

              </div>
            </div>
          </div>
          <div variant="primary" onClick={handleShow} className="col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h3> 400</h3>
                </p>

              </div>
            </div>
          </div>
          <div variant="primary" onClick={handleShow} className="col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h3> 500</h3>
                </p>

              </div>
            </div>
          </div>




        </div>
      </div>


      <Modal className='modal-question' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Theme</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal???</Modal.Body>
        <Modal.Footer>
          <input type="text" />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Theme
