var supertest = require("supertest");

require("../bootstrap.test");

describe("manufacturer Controller", function () {
  it("post error /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/manufacturer")
      .send({
        name: "Tata",
      })
      .expect(400)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  it("post /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/manufacturer")
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
  it("get /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/manufacturer")
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

  it("put /manufacturers invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/manufacturer/ids")
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
  it("put /manufacturers valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put(`/manufacturer/1`)
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
      .get("/manufacturer/1")
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

  it("delete /manufacturers invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/manufacturer/ids")
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
  it("delete /manufacturers huge invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete(`/manufacturer/9991`)
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
  it("delete /manufacturers valid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete(`/manufacturer/1`)
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
  it("post /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/manufacturer")
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
  it("delete all /manufacturers invalid", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/manufacturer")
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
