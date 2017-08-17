import murmur_hash2 from "../src/hash/murmur_hash2";

const assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));

        });
    });
});

