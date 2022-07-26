import React from "react";
import HornedBeast from "./HornedBeasts";
import Horned_data from "./Horned.json"



class Main extends React.Component{
  render(){
  return(

    <>
    {Horned_data.map(item => 
        {
          return (
            <HornedBeast title={item.title} imageurl={item.image_url} description={item.description} />
          )
        })   
    }
    </>
  );
  }
};

export default Main;