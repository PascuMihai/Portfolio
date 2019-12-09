import React, { Component } from "react";
import Header from "./components/Header";
import Counters from "./components/Counters";
import { Link } from "react-router-dom";
import uuid from "uuid";
import "./App2.css";

class App extends Component {
  state = {
    counters: [
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 0 }
    ]
  };

  onIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  onDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  onDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };

  onReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  onAddItem = () => {
    const newItem = { id: uuid.v4(), value: 0 };
    this.setState({
      counters: [...this.state.counters, newItem]
    });
  };

  render() {
    return (
      <div className="contains">
        <Header
          onReset={this.onReset}
          onAddItem={this.onAddItem}
          counters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        {this.state.counters.map(counter => (
          <Counters
            counter={counter}
            key={counter.id}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.onDelete}
          />
        ))}
        <Link className="button-primary" to="/">
          Go back to main page
        </Link>
      </div>
    );
  }
}

export default App;
