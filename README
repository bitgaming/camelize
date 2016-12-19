# Camelize

Recursively transform JSON object-keys to camelCase

# Example

``` js
var camelize = require('camelize');
var obj = {
    basic_case: 'camelized',
    _leading_underscores: 'are preserved',
    'other.types.of.keys': 'are ok',
    'other-types-of-keys': 'are ok',
    LowerCaseCameling: 'whatever that’s called',
    NESTED_ARRAYS: [
        { weirderKEYS: 'foo' },
        { WAT: 'bar' },
        { ALLSortsOfThings: 'baz' }
    ]
}

var res = camelize(obj);
/*
res = {
    basicCase: 'camelized',
    _leadingUnderscores: 'are preserved',
    otherTypesOfKeys: 'are ok',
    otherTypesOfKeys: 'are ok',
    lowerCaseCameling: 'whatever that’s called',
    nestedArrays: [
        { weirderKeys: 'foo' },
        { wat: 'bar' },
        { allSortsOfThings: 'baz' }
    ]
}
*/
```

Based on [substack/camelize](https://github.com/substack/camelize)
