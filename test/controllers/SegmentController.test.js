var supertest = require("supertest");

require("../bootstrap.test");

describe("segment Controller", function () {
  it("post /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/segment")
      .send({
        name: "Tata Sons",
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
  it("get /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/segment")
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

  it("put /segments invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/segment/ids")
      .send({ name: "abc" })
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("put /segments valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put(`/segment/1`)
      .send({
        name: "Bajaj",
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
  it("get /manu by id", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/segment/1")
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

  it("delete /segments invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/segment/ids")
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
  it("delete /segments valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete(`/segment/1`)
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
  it("delete /segments valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete(`/segment/1`)
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
  it("post /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/segment")
      .send({
        name: "Tata Sons2",
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
  it("delete all /segments invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/segment")
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
