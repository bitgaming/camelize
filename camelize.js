var isPlainObject = require('is-plain-object');
var magicRegex = /(^_)?([A-Z][a-z0-9]+|([A-Z]+?)(?=[A-Z][a-z0-9]+)|[a-z0-9]+|[A-Z0-9]+)/gm;

module.exports = function(obj) {
    if (typeof obj === 'string') return camelCase(obj);
    return walk(obj);
};

function walk(obj) {
    if (isArray(obj)) return map(obj, walk);
    if (isPlainObject(obj)) return reduce(objectKeys(obj), function(acc, key) {
        var camel = camelCase(key);
        acc[camel] = walk(obj[key]);
        return acc;
    }, {});
    return obj
}

function camelCase(str) {
    if (!str) {
        return '';
    }

    var parts = str.match(magicRegex);
    parts[0] = parts[0].toLowerCase();
    for (var i = 1, l = parts.length; i < l; i++) {
        parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1).toLowerCase();
    }
    return parts.join('');
}

var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) keys.push(key);
    }
    return keys;
};

function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
    }
    return res;
}

function reduce(xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i);
    }
    return acc;
}