import React from "react";
import { Prompt } from "react-router-dom";

export class About extends React.Component {
  fn=()=>{
    console.log(1111)
  }
  render() {
    return (
      <div className="form-wrap">
        this is about
        <Prompt message={()=>{
          this.fn()
        }} when={true} />
      </div>
    );
  }
}

export default About;
