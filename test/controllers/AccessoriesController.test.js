var supertest = require("supertest");
require("../bootstrap.test");

var accessories = require("../fixtures/Accessories.json");

describe("Accessories Controller", function () {
  it("post /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/accessories")
      .send(accessories)
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("get /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/accessories")
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
  it("put /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/accessories/1")
      .send(accessories[0])
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("put /accessories invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/accessories/ids")
      .send(accessories[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("search /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/accessories/search?limit=1&skip=5&sort=price&where1=1")
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
  it("delete /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/accessories/1")
      .send(accessories[0])
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("delete /accessories invalid id", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/accessories/ABC")
      .send(accessories[0])
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("delete /accessories huge invalid id", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/accessories/10000")
      .send(accessories[0])
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("deleteAll /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/accessories")
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
