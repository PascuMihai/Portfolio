import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import AddText from "./components/AddText";
import uuid from "uuid";
import "./App.css";

export class App extends Component {
  state = {
    texts: [
      {
        text: "hello",
        id: uuid.v4(),
        completed: false,
        count: 1
      }
    ],
    title: ""
  };

  render() {
    return (
      <div className="container-app">
        <Header />
        <AddText
          handleSubmit={this.handleSubmit}
          onChange={this.onChange}
          title={this.state.title}
        />
        <Body
          itemDelete={this.itemDelete}
          handleReset={this.handleReset}
          texts={this.state.texts}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }

  // AddText component -------

  addText = () => {
    const newText = {
      text: this.state.title,
      id: uuid.v4(),
      count: 1
    };
    this.setState({
      texts: [...this.state.texts, newText]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const addText = this.addText();
    this.setState({
      text: [...this.state.texts, addText]
    });
    this.setState({
      title: ""
    });
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  // Body component -------------

  itemDelete = () => {
    this.setState({
      texts: [...this.state.texts.filter(text => text.counter = 0)]
      });
  };

  handleEdit = (title, id) => {
    this.setState({
      texts: [...this.state.texts.filter(text => text.id !== id)]
    });
    this.setState({
      title
    });
  };

  handleCheck = id => {
    this.setState({
      texts: this.state.texts.map(text => {
        if (text.id === id) {
          text.completed = !text.completed;
        }
        return text;
      })
    });
  };

  handleDelete = id => {
    this.setState({
      texts: [...this.state.texts.filter(text => text.id !== id)]
    });
  };

  handleReset = () => {
    this.setState({
      texts: []
    });
  };

  increment = id => {
    this.setState({
      texts: this.state.texts.map(text => {
        if (text.id === id) {
          text.count++;
        }
        return text;
      })
    });
  };

  decrement = id => {
    this.setState({
      texts: this.state.texts.map(text => {
        if (text.id === id) {
          text.count--;
        }
        return text;
      })
    });
  };
}

export default App;
