
import './Theme.css'

import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Elem from '../Elem/Elem';


const Theme = ({ quest }) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log(quest?.question);


  return (
    <>
      <div className="container">
        <div className="row">

          <div className=" col-md-2 Services-tab item">
            <div className="folded-corner service_tab_1">
              <div className="text"> <i className="fa fa-image fa-5x fa-icon-image"></i>
                <p className="item-title">
                  <h6> {quest?.theme}</h6>


                </p>
              </div>
            </div>
          </div>
      {quest?.question?.map((el,i) => <Elem them={{quest}} i={(i+1)*100}  id={el.id} text={el.questionText} />)}
        </div>
      </div>
    </>
  )
}

export default Theme
