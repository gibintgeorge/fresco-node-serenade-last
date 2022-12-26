var supertest = require("supertest");

require("../bootstrap.test");

var cars = require("../fixtures/cars.json");

describe("Car Controller", function () {
  it("post /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/car")
      .send(cars)
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
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
          done();
        }
      });
  });

  it("put /cars invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/car/ids")
      .send(cars[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("put /cars valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);

    agent
      .put(`/car/1`)
      .send({
        name: "Honda City",
        segment: 4,
        description: "This is a dummy text for honda",
        manufacturer: 3,
        variants: [7, 8],
        accessories: [13, 15],
      })
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});
