describe('triangleEvaluation', function() {
  it("is false for any two sides equal to the third side", function() {
    expect(triangleEvaluation(10, 10, 20)).to.equal(false);
  });
  it("is false for any two sides equal to the third side", function() {
    expect(triangleEvaluation(20, 10, 10)).to.equal(false);
  });
  it("is false for any two sides equal to the third side", function() {
    expect(triangleEvaluation(10, 20, 10)).to.equal(false);
  });
  it("is false for any two sides less than the third side", function() {
    expect(triangleEvaluation(5, 5, 15)).to.equal(false);
  });
  it("is false for any two sides less than the third side", function() {
    expect(triangleEvaluation(15, 5, 5)).to.equal(false);
  });
  it("is false for any two sides less than the third side", function() {
    expect(triangleEvaluation(5, 15, 5)).to.equal(false);
  });
});
