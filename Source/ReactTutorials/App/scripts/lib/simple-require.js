var module = {
    'require': require,
    'react': { 'default': React },
    'react-dom': { 'default': ReactDOM },
};

function require(name) {
    if (name === "exports")
        return {}

    return module[name];
};

function define(name, requirements, f) {
    var exports;
    var resolved = requirements.map(function (req)
    {
        var required = require(req);
        if (req === "exports")
            exports = required;
        return required;
    });
    var result = f.apply(void 0, resolved);
    module[name] = exports;
};

