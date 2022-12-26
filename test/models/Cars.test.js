describe("Cars", function () {
  it("should not be empty", function (done) {
    Cars.find().exec(function (err, cars) {
      cars.length.should.be.eql(fixtures["cars"].length);
      done();
    });
  });
});
