import format from "../src/date/format";

const assert = require('assert');



describe('Date', function() {
    describe('#format()', function() {
        var d = new Date(2017, 7, 8);

        it('should return true', function() {
            assert.equal(format(d, 'Y-m-d'), '2017-08-08');
        });

        it('should return Y-m-d H:i:s format date', function(){
            assert.ok(format(d, 'Y-m-d H:i:s'));
        })
    });
});

