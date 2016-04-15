import React from 'react'
import ReactDOM from 'react-dom'

// class component, which can have state
class App extends React.Component<any, any> {
    render() {
        return <h1>Hello World</h1>;
    }
}

// stateless function components
const App2 = () => <h1>Hello Stateless Fuction</h1>;

export function run() {
    ReactDOM.render(
        <div>
            <App />
            <App2 />
        </div>,
        document.getElementById('appMount'));
}