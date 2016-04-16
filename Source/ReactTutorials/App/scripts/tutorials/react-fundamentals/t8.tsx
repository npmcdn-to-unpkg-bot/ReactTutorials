import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component<any, any> {
    render() {
        return (
            <Button>I <Heart /> React</Button>
        );
    }
}

class Button extends React.Component<any, any> {
    render() {
        return (
            <button>{this.props.children}</button>
        );
    }
}

const Heart = () => <span>&lt;3</span>

export function run() {
    ReactDOM.render(
        <App />,
        document.getElementById('appMount'));
}