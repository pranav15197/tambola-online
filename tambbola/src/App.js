import React, { Component } from 'react';
import './App.css';

class CurrentNumber extends Component {
  state = {
    number: 99
  }
  render() {
    return (
      <div className="main-number">
        {this.state.number}
      </div>
    );
  }
}

class TicketCell extends Component {
  state = {
    marked: false,
  }
  handleClick = () => {
    console.log("clicked")
    this.setState({
      marked: !this.state.marked
    })
  }
  render() {
    return (
      <div 
        className={this.state.marked ? 'ticket-cell marked' : 'ticket-cell'}
        onClick={this.handleClick}
      >
        {this.props.number ? this.props.number : null}
      </div>
    );
  }
}

class Ticket extends Component {
  state = {
    numbers: [
      1,0,25,33,0,57,0,77,0,
      0,17,0,37,0,58,0,78,81,
      4,0,28,0,46,0,65,0,85,
    ]
  }
  render() {
    let cells = this.state.numbers.map((number, i) => (
      <TicketCell number={number} key={i}/>
    ))
    return (
      <div className="ticket-container">
        {cells}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrentNumber />
        <Ticket />
      </div>
    );
  }
}

export default App;
