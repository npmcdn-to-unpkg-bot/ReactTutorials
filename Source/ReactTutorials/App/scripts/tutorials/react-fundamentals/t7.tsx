import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component<any, any> {
    // refs needs to be redefined to include red, green, and blue in order to satisfy the TypeScript compiler
    // in the update method
    refs: {
        [key: string]: (React.ReactInstance);
        red: (Slider);
        green: (Slider);
        blue: (Slider);
    }

    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode<any>(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode<any>(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode<any>(this.refs.blue.refs.inp).value
        });
    }

    render() {
        return (
            <div>
                <Slider ref="red" update={this.update} /><span>{this.state.red}</span><br />
                <Slider ref="green" update={this.update} /><span>{this.state.green}</span><br />
                <Slider ref="blue" update={this.update} /><span>{this.state.blue}</span><br />
            </div>
        );
    }
}

class Slider extends React.Component<any, any> {
    // refs needs to be redefined to include inp in order to satisfy the TypeScript compiler
    // in the App.update method
    refs: {
        [key: string]: (React.ReactInstance);
        inp: (HTMLInputElement);
    }

    render() {
        return (
            <div>
                <input ref="inp" type="range" min="0" max="255" onChange={this.props.update } />
            </div>
        );
    }
}

export function run() {
    ReactDOM.render(
        <App />,
        document.getElementById('appMount'));
}