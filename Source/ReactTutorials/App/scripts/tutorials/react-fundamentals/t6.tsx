import React from 'react'
import ReactDOM from 'react-dom'

interface IWidgetProps extends React.ClassAttributes<App> {
    txt: string;
    update: (e) => void;
}

class App extends React.Component<any, any> {
    constructor() {
        super();
        this.state = { txt: '' };
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        );
    }
}

const Widget = (props: IWidgetProps) => {
    return (
        <div>
            <input type="text" onChange={props.update } />
            <h1>{props.txt}</h1>
        </div>
    );
}

export function run() {
    ReactDOM.render(
        <App />,
        document.getElementById('appMount'));
}