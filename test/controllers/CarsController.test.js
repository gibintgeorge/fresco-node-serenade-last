var supertest = require("supertest");

require("../bootstrap.test");

var cars = require("../fixtures/cars.json");
const Cars = require("../../api/models/Cars");

describe("Car Controller", function () {
  // it("post /car", function (done) {
  //   var agent = supertest.agent(sails.hooks.http.app);
  //   agent
  //     .post("/car")
  //     .send({
  //       name: "Tata Nexon",
  //       segment: 1,
  //       description: "This is a dummy text",
  //       manufacturer: 1,
  //       variants: [1, 2, 3, 4],
  //       accessories: [1, 4, 5, 8],
  //     })
  //     .expect(200)
  //     .end(function (err, result) {
  //       if (err) {
  //         done(err);
  //       } else {
  //         done();
  //       }
  //     });
  // });
  it("get /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/car")
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          // result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });
});
