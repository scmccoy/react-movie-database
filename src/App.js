import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// const welcome = "Welcome yo";

class App extends Component {
  state = {
    input: "Hello"
  };

  submit = () => {
    console.log("click", this.text.value);
  };

  updateInput = e => {
    console.log("update input", e.target.value);
    this.setState({
      input: e.target.value
    });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Props" />
          <input type="text" onChange={this.updateInput} value={input} />
          <input type="text" ref={input => (this.text = input)} />
          <button onClick={this.submit}>Show Value</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1>{text}</h1>;
  }
}

export default App;
