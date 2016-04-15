import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component<any, any> {
    refs: {
        [key: string]: (Element),
        red: (HTMLInputElement),
        green: (HTMLInputElement),
        blue: (HTMLInputElement),
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
            red: ReactDOM.findDOMNode<HTMLInputElement>(this.refs.red).value,
            green: ReactDOM.findDOMNode<HTMLInputElement>(this.refs.green).value,
            blue: ReactDOM.findDOMNode<HTMLInputElement>(this.refs.blue).value
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
    render() {
        return (
            <input type="range" min="0" max="255" onChange={this.props.update } />
        );
    }
}

export function run() {
    ReactDOM.render(
        <App />,
        document.getElementById('appMount'));
}