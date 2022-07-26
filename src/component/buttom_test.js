import React from "react";




class Buttom_test extends React.Component{
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };



  render(){
  return(
     <button  onClick={e => {this.showModal();}}> show Modal </button> 
     <Modal show={this.state.show} />

  );
  }
};

export default Buttom_test;