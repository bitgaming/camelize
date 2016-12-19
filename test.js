var assert = require('assert')
var camelize = require('./camelize')

describe('camelize()', function() {
    var obj;
    describe('standard JSON object', function() {
        beforeEach(function() {
            obj = {
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
        })

        it('should camelise all the keys', function() {
            assert.deepEqual({
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
            }, camelize(obj))
        })
    })

    describe('other objects', function() {
        beforeEach(function() {
            function Thing() {
                this.some_prop = 'here'
            }

            Thing.prototype.some_function = function() {
                return 'still here'
            }

            obj = {
                object_key: new Thing()
            }
        })

        it('doesn’t modify properties', function() {
            assert.strictEqual(camelize(obj).objectKey.some_prop, 'here')
        })

        it('doesn’t modify functions', function() {
            assert.strictEqual(camelize(obj).objectKey.some_function(), 'still here')
        })
    })
})
