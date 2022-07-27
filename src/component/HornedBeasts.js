import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./SelectedBeast.js"

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    clickCounter: 0,
    showModal : false,
    Src: this.props.imageurl,
    Titl: this.props.title,
    Descrip: this.props.description,
  }}

  handleClose = () => {
    this.setState({
      showModal: false 
    })
  }


  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      clickCounter: this.state.clickCounter + 1,
      showModal : true
    });
  }


  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageurl} alt={this.props.title} onClick={this.handleClick} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary">👍{this.state.clickCounter}</Button>
        <SelectedBeast 
        src = {this.state.Src} 
        Titl = {this.state.Titl} 
        Descrip = {this.state.Descrip} 
        showbyimg = {this.state.showw}
        showModal={this.state.showModal}
        handleClose={this.handleClose} />
      </Card.Body>
    </Card>
    )
  }
}

export default HornedBeast;

