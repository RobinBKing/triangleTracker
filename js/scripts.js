var triangleEvaluation = function(side1, side2, side3) {
  //ny two sides equal to the third side
  //two sides less than the third side
  if(side1 + side2 <= side3){
    return false;
  }
  else if(side2 + side3 <= side1) {
    return false;
  }
  else if(side3 + side1 <= side2) {
      return false;
  }
  // is an equilateral triangle
  if (side1 === side2 && side1 === side3) {
      return true;
  }
  //two sides are equal
  if(side1 === side2 && (side1 + side2 > side3)) {
    return true;
  }
  if(side2 === side3 && (side2 + side3 > side1)) {
    return true;
  }
  if(side1 === side3 && (side1 + side3 > side2)) {
    return true;
  }
  //No sides are equal
  if ((side1 !== side2) && (side1 !== side3) && (side1 + side2 > side3)) {
      return true;
  }
};
