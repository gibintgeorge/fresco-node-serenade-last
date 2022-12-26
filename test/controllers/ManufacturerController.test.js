var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');

describe('Accessories Controller', function() {
  
  it('get /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

});