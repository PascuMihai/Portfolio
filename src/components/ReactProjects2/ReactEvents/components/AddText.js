import React, { Component } from "react";

export class AddText extends Component {
  render() {
    return (
      <div className='container-events'>
        <h1 style={{ fontSize: "22px", color: '#110f0f'}}>
          Practice: Add, Edit, Delete, Reset, Check, Increment, Decrement,
          Conditional Rendering.
        </h1>
        <form className="add" onSubmit={this.props.handleSubmit}>
          <input
            placeholder="Input Text..."
            className="add-text"
            value={this.props.title}
            type="text"
            onChange={this.props.onChange}
          />
          <input className="btn-submit" type="submit" style={{background: 'grey'}}/>
        </form>
      </div>
    );
  }
}

export default AddText;
