import React from "react";
import HornedBeast from "./HornedBeasts";
import Horned_data from "./Horned.json"
import Formuser from "./Formuser";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class Main extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      data: Horned_data,
    }
  }

  handlesearch = (e) => {
    const numberofhorns = parseInt(e.target.value)
    let filterdata = Horned_data

    if (numberofhorns){
      filterdata = Horned_data.filter(item => item.horns === numberofhorns)
    }

    this.setState({data : filterdata})
  }
      


    


  render(){
  return(
    <>
      <Formuser
      handlesearch = {this.handlesearch}/>

      <Row xs={2} md={4} className="g-4">
      {this.state.data.map(item => 
      {
      return (
      <Col>
        <HornedBeast title={item.title} imageurl={item.image_url} description={item.description} />
     </Col>
      )})  
      } 
      </Row>        
    </>
  );
  }
};

export default Main;