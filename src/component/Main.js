import React from "react";
import HornedBeast from "./HornedBeasts";


let animals_arr = require('./Horned.json');


class Main extends React.Component{
  render(){
  return(

    <>
    {animals_arr.map((item,key) => 
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