import React from "react";
import HornedBeast from "./HornedBeasts";
import Horned_data from "./Horned.json"
import Formuser from "./Formuser";



class Main extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      data: Horned_data,
      search : ""
    }
  }

  handlesearch = (event) => {
    const filterdata = Horned_data.filter((data) => {
      return data.horns.includes(this.search)})
      this.setState({
        data : filterdata
      }
      )
    }

    


  render(){
  return(
    <>
      <Formuser
      handlesearch = {this.handlesearch}

      />

     {this.state.data.map(item => 
      {
      return (
     <HornedBeast title={item.title} imageurl={item.image_url} description={item.description} />
      )})  
      }         
    </>
  );
  }
};

export default Main;