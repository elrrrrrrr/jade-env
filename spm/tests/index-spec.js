var expect = require('expect.js');
var jade = require('../index');


describe('jade-env', function() {

  it('should has attr', function() {
    expect('attr' in jade).to.equal(true);
    
  });

});
