﻿import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        };
    }
    
    update(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this) } />
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
}

export function run() {
    ReactDOM.render(
        <App />,
        document.getElementById('appMount'));
}