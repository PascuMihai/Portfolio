import React from "react";

function Header(props) {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href='/'>
          Shopping Cart <span>{props.counters}</span>
        </a>
      </nav>
      <div className="container">
        <button onClick={props.onReset} className="button-primary">
          Reset
        </button>
        <button onClick={props.onAddItem} className="button-primary">
          Add item
        </button>
      </div>
    </div>
  );
}

export default Header;
