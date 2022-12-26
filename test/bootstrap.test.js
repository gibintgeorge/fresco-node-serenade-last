var Sails = require("sails");
var Barrels = require("barrels");
global.chai = require("chai");

global.should = chai.should();

require("should");

before(function (done) {
  Sails.lift(
    {
      log: {
        level: "error",
      },
      models: {
        connection: "test",
        migrate: "drop",
      },
    },
    function (err, sails) {
      if (err) return done(err);
      else {
        var barrels = new Barrels();
        fixtures = barrels.data;
        barrels.populate(
          ["variant", "segment", "manufacturer", "car"],
          function (err) {
            return done(err, sails);
          },
          true
        );
      }
    }
  );
});

// Global after hook
after(function (done) {
  console.log();
  Sails.lower(done);
});
