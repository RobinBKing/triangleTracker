describe('triangleEvaluation', function() {
  it("is false for any two sides greater than or equal to the third side", function() {
    expect(triangleEvaluation(10, 10, 20)).to.equal(false);
  });
  it("is false for any two sides greater than or equal to the third side", function() {
    expect(triangleEvaluation(20, 10, 10)).to.equal(false);
  });
  it("is false for any two sides greater than or equal to the third side", function() {
    expect(triangleEvaluation(10, 20, 10)).to.equal(false);
  });
});
