import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

export default class Decrement extends Component {

    constructor(props) {
        super(props);

        this.state ={
            decnumber: this.props.decnumber
        };
    }

    decfunc = () => {

        if(this.state.decnumber > 0) {
            this.setState({
                decnumber: this.state.decnumber-1
            })
        }
        else {
            alert("Cannot be less than zero")
        }

    }

    render() {
        return (
            <div>
                <div>{this.state.decnumber}</div>
                <Button 
                    variant="contained" onClick={this.decfunc}>DECREMENT
                </Button>
            </div>
        )
    }
}


Decrement.propTypes = {
    decnumber: PropTypes.number.isRequired
}

