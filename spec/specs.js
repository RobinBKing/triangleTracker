describe('triangleEvaluation', function() {
  //ny two sides equal to the third side
  it("is false for any two sides equal to the third side", function() {
    expect(notTriangle(10, 10, 20)).to.equal(true);
  });
  it("is false for any two sides equal to the third side", function() {
    expect(notTriangle(20, 10, 10)).to.equal(true);
  });
  it("is false for any two sides equal to the third side", function() {
    expect(notTriangle(10, 20, 10)).to.equal(true);
  });
  //two sides less than the third side
  it("is false for any two sides less than the third side", function() {
    expect(notTriangle(5, 5, 15)).to.equal(true);
  });
  it("is false for any two sides less than the third side", function() {
    expect(notTriangle(15, 5, 5)).to.equal(true);
  });
  it("is false for any two sides less than the third side", function() {
    expect(notTriangle(5, 15, 5)).to.equal(true);
  });
  // is an equilateral triangle
  it("is true if it is an equilateral triangle", function() {
    expect(equalTriangle(10, 10, 10)).to.equal(true);
  });
  //Sides are equal
  it("is true if no sides are equal", function() {
    expect(scaleneTriangle(10, 15, 20)).to.equal(true);
  });
  //two sides are equal
  it("is true if two sides are equal", function() {
    expect(isoscelesTriangle(10, 10, 15)).to.equal(true);
  });
  it("is true if two sides are equal", function() {
    expect(isoscelesTriangle(15, 10, 10)).to.equal(true);
  });
  it("is true if two sides are equal", function() {
    expect(isoscelesTriangle(10, 15, 10)).to.equal(true);
  });
});
