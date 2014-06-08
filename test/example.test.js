
var request = require('superagent');

describe('For our example test', function () {
  it('should of course find true to be true', function () {
    true.should.equal(true);
  });

  /**
   * This example test runs against jsonplaceholder.
   * https://github.com/typicode/jsonplaceholder
   */
  describe('When hitting jsonplaceholder', function () {
    var testData;

    beforeEach(function () {
      testData = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };
    });

    it('should be able to post correctly', function (done) {
      request
        .post('http://jsonplaceholder.typicode.com/posts')
        .send(testData)
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) return done(err);

          res.body.should.have.property('id');
          res.body.should.have.property('title', 'foo');
          res.body.should.have.property('body', 'bar');
          res.body.should.have.property('userId', '1');

          done();
        });
    });
  });
});
