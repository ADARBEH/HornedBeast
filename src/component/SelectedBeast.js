import React from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Modeluser extends React.Component{
  

  render(){
    return(
      <>
      <Modal show={this.props.showModal} onHide={this.props.handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.Titl}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <img
              style={{ width: "100%" }}
              src={this.props.src}
              alt={this.props.Titl}/>

              <p style={{ textAlign: "center" }}>{this.props.Descrip}</p>
            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default Modeluser;