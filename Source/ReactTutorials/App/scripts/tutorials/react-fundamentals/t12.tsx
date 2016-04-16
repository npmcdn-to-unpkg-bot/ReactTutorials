import React from 'react'
import ReactDOM from 'react-dom'

let Mixin = InnerComponent => class extends React.Component<any, any> {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = { val: 0 };
    }

    update() {
        this.setState({ val: this.state.val + 1 });
    }

    componentWillMount() {
        console.log('will mount');
    }

    render() {
        return (
            <InnerComponent
                update={ this.update }
                { ...this.state }
                { ...this.props }
                />
        );
    }

    componentDidMount() {
        console.log('mounted');
    }
}

const Button = (props) => <button onClick={ props.update }>{ props.txt } - { props.val }</button>;

let ButtonMixed = Mixin(Button);

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <ButtonMixed txt="Button" />
            </div>
        );
    }
}

export function run() {
    ReactDOM.render(
        <App />,
        document.getElementById('appMount'));
}