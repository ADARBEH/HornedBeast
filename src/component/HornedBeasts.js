import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0
    }
  }

  handleClick = () => {
    this.setState({clickCounter: this.state.clickCounter + 1})
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
      </Card.Body>
    </Card>
    )
  }
}

export default HornedBeast;

