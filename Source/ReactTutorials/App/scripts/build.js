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
    function run() {
        react_dom_2.default.render(react_2.default.createElement(App, {cat: 5, txt: "this is a props value"}), document.getElementById('appMount'));
    }
    exports.run = run;
});
define("redux/t0", ["require", "exports"], function (require, exports) {
    "use strict";
    function foo() { }
    exports.foo = foo;
});
//# sourceMappingURL=build.js.map