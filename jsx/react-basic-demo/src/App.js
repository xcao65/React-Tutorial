import './App.css';
import React, {Component} from 'react';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color : ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(color) {
    this.setState({color : color});
  }

  render() {
    return (
      <div>
        <Button handleClick={this.handleClick} color={this.state.color} buttonName={"green"}>green</Button>
        <Button handleClick={this.handleClick} color={this.state.color} buttonName={"red"}>red</Button>
      </div>
    );
  }
}

export default App;
