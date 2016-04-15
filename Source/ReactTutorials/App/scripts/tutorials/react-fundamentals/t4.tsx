import React from 'react'
import ReactDOM from 'react-dom'

// in TypeScript we can define compile-time properties:
interface IAppProps extends React.Props<App> {
    // the '?' indicates that txt is optional
    txt?: string;
    cat: number;
}

class App extends React.Component<IAppProps, any> {
    render() {
        let txt = this.props.txt;
        return <h1>{txt}</h1>;
    }
}

// if we want run-time validation using react PropTypes, we need to do the following:
(App as any).propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
// in this case, if cat is not set, a runtime warning is generated:
// Warning: Failed propType: Required prop `cat` was not specified in `App`.

// The prefered method for TypeScript is to use compile-time checking by defining the property interface,
// and if the component requires runtime checking as well (for example, if the compiled version is going
// to be used in a non-TypeScript environment), then ALSO set the propTypes property.

export function run() {
    ReactDOM.render(
        <App cat={5} txt="this is a props value" />,
        document.getElementById('appMount'));
}