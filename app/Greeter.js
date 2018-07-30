//Greeter,js
import React, { Component } from 'react'
import Demo from './components/demo'
import 'antd/dist/antd.css'   //globally import css

class Greeter extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>

                <Demo />
            </div>
        );
    }
}

export default Greeter

