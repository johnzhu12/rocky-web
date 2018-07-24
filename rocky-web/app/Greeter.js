//Greeter,js
import React, { Component } from 'react'
import config from './config.json';
import List from './components/list'

class Greeter extends Component {
    render() {
        return (
            <div>
                {config.greetText}
                <List />
            </div>
        );
    }
}

export default Greeter

