import React from "react";

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
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageurl} alt={this.props.title} onClick={this.handleClick} />  
        <p>{this.props.description}</p>
        <span>👍{this.state.clickCounter}</span>
      </>
    )
  }
}

export default HornedBeast;

