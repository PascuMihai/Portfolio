import React from "react";

function Form() {
  return (
    <div id='contact'>
      <form className="form">
        <h1>
          Thanks for taking the time to reach out. How can I help you today?
        </h1>
        <div className="form-control-1">
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email Address</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-control-2">
          <label>Message</label>
          <input type="textarea" />
        </div>
        <input className='submit' type="submit"/>
      </form>
    </div>
  );
}

export default Form;
