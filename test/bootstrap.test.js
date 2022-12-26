var Sails = require("sails");
var Barrels = require("barrels");
require("should");

// Global before hook
before(function (done) {
  // Lift Sails with test database
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

      // Load fixtures
      var barrels = new Barrels();

      // Save original objects in `fixtures` variable
      fixtures = barrels.data;

      // Populate the DB
      // barrels.populate(
      //   // ["variant", "segment", "manufacturer", "car"],
      //   function (err) {
      //     if (err) {
      //       console.error(error);
      //       done(err);
      //     } else {
      //       done();
      //     }
      //   }
      // );
      barrels.populate();
    }
  );
});

// Global after hook
after(function (done) {
  console.log(); // Skip a line before displaying Sails lowering logs
  sails.lower(done);
});
