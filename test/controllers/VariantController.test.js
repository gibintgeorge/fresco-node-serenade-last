var supertest = require("supertest");

require("../bootstrap.test");

describe("variant Controller", function () {
  it("post /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/variant")
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
  it("get /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/variant")
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

  it("put /variants invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/variant/ids")
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
  it("put /variants valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put(`/variant/1`)
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
      .get("/variant/1")
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

  it("delete /variants invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/variant/ids")
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
  it("delete /variants valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete(`/variant/1`)
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
  it("delete /variants valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete(`/variant/1`)
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
  it("post /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/variant")
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
  it("delete all /variants invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/variant")
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
