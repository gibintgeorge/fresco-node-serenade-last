var supertest = require("supertest");

require("../bootstrap.test");

var cars = require("../fixtures/cars.json");

describe("Car Controller", function () {
  it("post /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    Segment.create({ name: "segment" }).exec(function (err, segment) {
      if (err) return next(err);
      Manufacturer.create({ name: "manu" }).exec(function (err, manufacturer) {
        if (err) return next(err);
        const data = {
          name: "Honda City 1",
          segment: segment.id,
          description: "This is a dummy text",
          manufacturer: manufacturer.id,
        };
        agent
          .post("/car")
          .send(data)
          .expect(200)
          .end(function (err, result) {
            if (err) {
              done(err);
            } else {
              agent
                .put(`/car/${result.body.id}`)
                .send({
                  name: "Honda City",
                  segment: 4,
                  description: "This is a dummy text for honda",
                })
                .expect(200)
                .end(function (err, result) {
                  if (err) {
                    done(err);
                  } else {
                    done();
                  }
                });
            }
          });
      });
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

  it("search /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/car/search")
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
  it("search with param /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get(`/car/search?limit=1&skip=5&sort=price&where={"id":{">=":"2000"}}`)
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it("delete /cars invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/car/ids")
      .send()
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it("delete /cars valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/car/1")
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
  it("delete /cars huge invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/car/991")
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("delete all /cars invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/car")
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
});
