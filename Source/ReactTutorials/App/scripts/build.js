var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("react-fundamentals/t2", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_1, react_dom_1) {
    "use strict";
    // class component, which can have state
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.render = function () {
            return react_1.default.createElement("h1", null, "Hello World");
        };
        return App;
    }(react_1.default.Component));
    // stateless function components
    var App2 = function () { return react_1.default.createElement("h1", null, "Hello Stateless Fuction"); };
    function run() {
        react_dom_1.default.render(react_1.default.createElement("div", null, react_1.default.createElement(App, null), react_1.default.createElement(App2, null)), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t4", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_2, react_dom_2) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.render = function () {
            var txt = this.props.txt;
            return react_2.default.createElement("h1", null, txt);
        };
        return App;
    }(react_2.default.Component));
    // if we want run-time validation using react PropTypes, we need to do the following:
    App.propTypes = {
        txt: react_2.default.PropTypes.string,
        cat: react_2.default.PropTypes.number.isRequired
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
        react_dom_2.default.render(react_2.default.createElement(App, {cat: 5}), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t5", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_3, react_dom_3) {
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
            return (react_3.default.createElement("div", null, react_3.default.createElement("input", {type: "text", onChange: this.update.bind(this)}), react_3.default.createElement("h1", null, this.state.txt)));
        };
        return App;
    }(react_3.default.Component));
    function run() {
        react_dom_3.default.render(react_3.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t6", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_4, react_dom_4) {
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
            return (react_4.default.createElement("div", null, react_4.default.createElement(Widget, {txt: this.state.txt, update: this.update}), react_4.default.createElement(Widget, {txt: this.state.txt, update: this.update}), react_4.default.createElement(Widget, {txt: this.state.txt, update: this.update}), react_4.default.createElement(Widget, {txt: this.state.txt, update: this.update})));
        };
        return App;
    }(react_4.default.Component));
    var Widget = function (props) {
        return (react_4.default.createElement("div", null, react_4.default.createElement("input", {type: "text", onChange: props.update}), react_4.default.createElement("h1", null, props.txt)));
    };
    function run() {
        react_dom_4.default.render(react_4.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("react-fundamentals/t7", ["require", "exports", 'react', 'react-dom'], function (require, exports, react_5, react_dom_5) {
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
                red: react_dom_5.default.findDOMNode(this.refs.red).value,
                green: react_dom_5.default.findDOMNode(this.refs.green).value,
                blue: react_dom_5.default.findDOMNode(this.refs.blue).value
            });
        };
        App.prototype.render = function () {
            return (react_5.default.createElement("div", null, react_5.default.createElement(Slider, {ref: "red", update: this.update}), react_5.default.createElement(Slider, {ref: "green", update: this.update}), react_5.default.createElement(Slider, {ref: "blue", update: this.update})));
        };
        return App;
    }(react_5.default.Component));
    var Slider = (function (_super) {
        __extends(Slider, _super);
        function Slider() {
            _super.apply(this, arguments);
        }
        Slider.prototype.render = function () {
            return (react_5.default.createElement("input", {type: "range", min: "0", max: "255", onChange: this.props.update}));
        };
        return Slider;
    }(react_5.default.Component));
    function run() {
        react_dom_5.default.render(react_5.default.createElement(App, null), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("redux/t0", ["require", "exports"], function (require, exports) {
    "use strict";
    function foo() { }
    exports.foo = foo;
});
//# sourceMappingURL=build.js.map