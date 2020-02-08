
const assert = require('assert');

describe ('file to be tested', () => {

    context('um pra cada função', ()=>{
        it('um pra cada teste 1', ()=>{
            assert.equal(2,1)
;        });

        it('one for each test 2', ()=>{
            assert.equal(2,1)
        });
    });

    context('abc', ()=>{
        it('one for each test 3', ()=>{
            assert.equal(2,1)
        });

        it('one for each test 4');
    });
});