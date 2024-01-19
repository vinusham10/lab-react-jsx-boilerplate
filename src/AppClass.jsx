import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const imgData = this.imageData();
    return (
      <div>
        <h1>Kalvium gallary</h1>
        <div className="row">
        {
         imgData.map((image) => {
          return(
            <div className="column"key={image.id}>
              <img src={image.img} alt=""/>
            </div>
          )
          
          })};
      </div>
  
      </div>
    );
  }
}


