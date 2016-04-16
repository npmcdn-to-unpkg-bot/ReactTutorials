var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("react-fundamentals/t10", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_1, react_dom_1) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.state = { val: 0 };
            this.update = this.update.bind(this);
        }
        App.prototype.update = function () {
            this.setState({ val: this.state.val + 1 });
        };
        App.prototype.componentWillMount = function () {
            this.setState({ m: 2 });
        };
        App.prototype.render = function () {
            console.log('rendering!');
            return (react_1.default.createElement("button", {onClick: this.update}, this.state.val * this.state.m));
        };
        App.prototype.componentDidMount = function () {
            this.inc = setInterval(this.update, 500);
        };
        App.prototype.componentWillUnmount = function () {
            clearInterval(this.inc);
        };
        return App;
    }(react_1.default.Component));
    var Wrapper = (function (_super) {
        __extends(Wrapper, _super);
        function Wrapper() {
            _super.call(this);
        }
        Wrapper.prototype.mount = function () {
            react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('a'));
        };
        Wrapper.prototype.unmount = function () {
            react_dom_1.default.unmountComponentAtNode(document.getElementById('a'));
        };
        Wrapper.prototype.render = function () {
            return (react_1.default.createElement("div", null, react_1.default.createElement("button", {onClick: this.mount.bind(this)}, "Mount"), react_1.default.createElement("button", {onClick: this.unmount.bind(this)}, "Unmount"), react_1.default.createElement("div", {id: "a"})));
        };
        return Wrapper;
    }(react_1.default.Component));
    function run() {
        react_dom_1.default.render(react_1.default.createElement(Wrapper, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t2", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_2, react_dom_2) {
    "use strict";
    // class component, which can have state
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.render = function () {
            return react_2.default.createElement("h1", null, "Hello World");
        };
        return App;
    }(react_2.default.Component));
    // stateless function components
    var App2 = function () { return react_2.default.createElement("h1", null, "Hello Stateless Fuction"); };
    function run() {
        react_dom_2.default.render(react_2.default.createElement("div", null, react_2.default.createElement(App, null), react_2.default.createElement(App2, null)), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t4", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_3, react_dom_3) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.render = function () {
            var txt = this.props.txt;
            return react_3.default.createElement("h1", null, txt);
        };
        return App;
    }(react_3.default.Component));
    // if we want run-time validation using react PropTypes, we need to do the following:
    App.propTypes = {
        txt: react_3.default.PropTypes.string,
        cat: react_3.default.PropTypes.number.isRequired
    };
    // in this case, if cat is not set, a runtime warning is generated:
    // Warning: Failed propType: Required prop `cat` was not specified in `App`.
    // The prefered method for TypeScript is to use compile-time checking by defining the property interface,
    // and if the component requires runtime checking as well (for example, if the compiled version is going
    // to be used in a non-TypeScript environment), then ALSO set the propTypes property.
    // Additionally, we can set defaults as follows:
    App.defaultProps = {
        txt: 'this is the default txt'
    };
    function run() {
        react_dom_3.default.render(react_3.default.createElement(App, {cat: 5}), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t5", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_4, react_dom_4) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.state = {
                txt: 'this is the state txt',
                cat: 0
            };
        }
        App.prototype.update = function (e) {
            this.setState({ txt: e.target.value });
        };
        App.prototype.render = function () {
            return (react_4.default.createElement("div", null, react_4.default.createElement("input", {type: "text", onChange: this.update.bind(this)}), react_4.default.createElement("h1", null, this.state.txt)));
        };
        return App;
    }(react_4.default.Component));
    function run() {
        react_dom_4.default.render(react_4.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t6", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_5, react_dom_5) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.state = { txt: '' };
            this.update = this.update.bind(this);
        }
        App.prototype.update = function (e) {
            this.setState({ txt: e.target.value });
        };
        App.prototype.render = function () {
            return (react_5.default.createElement("div", null, react_5.default.createElement(Widget, {txt: this.state.txt, update: this.update}), react_5.default.createElement(Widget, {txt: this.state.txt, update: this.update}), react_5.default.createElement(Widget, {txt: this.state.txt, update: this.update}), react_5.default.createElement(Widget, {txt: this.state.txt, update: this.update})));
        };
        return App;
    }(react_5.default.Component));
    var Widget = function (props) {
        return (react_5.default.createElement("div", null, react_5.default.createElement("input", {type: "text", onChange: props.update}), react_5.default.createElement("h1", null, props.txt)));
    };
    function run() {
        react_dom_5.default.render(react_5.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t7", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_6, react_dom_6) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.state = {
                red: 0,
                green: 0,
                blue: 0
            };
            this.update = this.update.bind(this);
        }
        App.prototype.update = function (e) {
            this.setState({
                red: react_dom_6.default.findDOMNode(this.refs.red.refs.inp).value,
                green: react_dom_6.default.findDOMNode(this.refs.green.refs.inp).value,
                blue: react_dom_6.default.findDOMNode(this.refs.blue.refs.inp).value
            });
        };
        App.prototype.render = function () {
            return (react_6.default.createElement("div", null, react_6.default.createElement(Slider, {ref: "red", update: this.update}), react_6.default.createElement("span", null, this.state.red), react_6.default.createElement("br", null), react_6.default.createElement(Slider, {ref: "green", update: this.update}), react_6.default.createElement("span", null, this.state.green), react_6.default.createElement("br", null), react_6.default.createElement(Slider, {ref: "blue", update: this.update}), react_6.default.createElement("span", null, this.state.blue), react_6.default.createElement("br", null)));
        };
        return App;
    }(react_6.default.Component));
    var Slider = (function (_super) {
        __extends(Slider, _super);
        function Slider() {
            _super.apply(this, arguments);
        }
        Slider.prototype.render = function () {
            return (react_6.default.createElement("div", null, react_6.default.createElement("input", {ref: "inp", type: "range", min: "0", max: "255", onChange: this.props.update})));
        };
        return Slider;
    }(react_6.default.Component));
    function run() {
        react_dom_6.default.render(react_6.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t8", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_7, react_dom_7) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.render = function () {
            return (react_7.default.createElement(Button, null, "I ", react_7.default.createElement(Heart, null), " React"));
        };
        return App;
    }(react_7.default.Component));
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        Button.prototype.render = function () {
            return (react_7.default.createElement("button", null, this.props.children));
        };
        return Button;
    }(react_7.default.Component));
    var Heart = function () { return react_7.default.createElement("span", null, "<3"); };
    function run() {
        react_dom_7.default.render(react_7.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t9", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_8, react_dom_8) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.call(this);
            this.state = { val: 0 };
            this.update = this.update.bind(this);
        }
        App.prototype.update = function () {
            this.setState({ val: this.state.val + 1 });
        };
        App.prototype.componentWillMount = function () {
            console.log('mounting');
        };
        App.prototype.render = function () {
            console.log('rendering!');
            return (react_8.default.createElement("button", {onClick: this.update}, this.state.val));
        };
        App.prototype.componentDidMount = function () {
            console.log('mounted');
        };
        App.prototype.componentWillUnmount = function () {
            console.log('bye!');
        };
        return App;
    }(react_8.default.Component));
    var Wrapper = (function (_super) {
        __extends(Wrapper, _super);
        function Wrapper() {
            _super.call(this);
        }
        Wrapper.prototype.mount = function () {
            react_dom_8.default.render(react_8.default.createElement(App, null), document.getElementById('a'));
        };
        Wrapper.prototype.unmount = function () {
            react_dom_8.default.unmountComponentAtNode(document.getElementById('a'));
        };
        Wrapper.prototype.render = function () {
            return (react_8.default.createElement("div", null, react_8.default.createElement("button", {onClick: this.mount.bind(this)}, "Mount"), react_8.default.createElement("button", {onClick: this.unmount.bind(this)}, "Unmount"), react_8.default.createElement("div", {id: "a"})));
        };
        return Wrapper;
    }(react_8.default.Component));
    function run() {
        react_dom_8.default.render(react_8.default.createElement(Wrapper, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("redux/t0", ["require", "exports"], function (require, exports) {
    "use strict";
    function foo() { }
    exports.foo = foo;
});
//# sourceMappingURL=build.js.map