import React, {Component} from 'react';
import './App.css';
import PropTypes from "prop-types";
import Card from "./Card";
import Decrement from './Decrement';

class BusinessCardForm extends Component {

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.phonenumber}</div>
        <div>{this.props.email}</div>
      </div>
    )
  }
};

BusinessCardForm.propTypes = {
  name: PropTypes.string,
  phonenumber: PropTypes.string,
  email: PropTypes.number.isRequired
}

class App extends Component {
  render() {
    return (
      <div>
        <Card name="Caitlin Selca" phonenumber="1-222-222-2222" email="caitlinselca@gmail.com"></Card>
        <Card name="Elizabeth Selca" phonenumber="1-333-333-3333" email="elizabethselca@aol.com"></Card>
        <Card name="Delia Selca" phonenumber="1-444-444-4444" email="deliaselca@yahoo.com"></Card>
        <Decrement decnumber={5}></Decrement>
      </div>
    )
  }
}

export default App;
