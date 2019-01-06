import React from "react";

const Form = props => (
  <div className="form-wrap">
    <input value={props.todoItem} onChange={props.onChange} />
    <button onClick={props.onSubmit}>Submit</button>
  </div>
);

export default Form;
