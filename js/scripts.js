var notTriangle = function(side1, side2, side3) {
  //ny two sides equal to the third side
  //two sides less than the third side
  if(side1 + side2 <= side3){
    return true;
  }
  else if(side2 + side3 <= side1) {
    return true;
  }
  else if(side3 + side1 <= side2) {
      return true;
  }
  else {
    return false;
  }
};
var equalTriangle = function(side1, side2, side3) {
  // is an equilateral triangle
  if (side1 === side2 && side1 === side3) {
      return true;
  }
  else {
    return false;
  }
};

var isoscelesTriangle = function(side1, side2, side3) {
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
  else {
    return false;
  }
};

var scaleneTriangle = function(side1, side2, side3) {
  //No sides are equal
  if ((side1 !== side2) && (side1 !== side3) && (side1 + side2 > side3)) {
      return true;
  }
};

//interface
$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var notTriangleresult = notTriangle(side1, side2, side3);
    var equalTriangleresult = equalTriangle(side1, side2, side3);
    var isoscelesTriangleresult = isoscelesTriangle(side1, side2, side3);// $(".year").text(year);
    var scaleneTriangleresult = scaleneTriangle(side1, side2, side3);// $(".year").text(year);

    if (notTriangleresult) {                 // same as writing if (result === false)
      $(".triangleType").text("not a triangle.");
    } else if (equalTriangleresult) {                 // same as writing if (result === false)
      $(".triangleType").text("an equalateral triangle.");
    } else if (isoscelesTriangleresult) {                 // same as writing if (result === false)
      $(".triangleType").text("an isosceles triangle.");
    } else if (scaleneTriangleresult) {                 // same as writing if (result === false)
    $(".triangleType").text("a scalene triangle.");
  }

    $("#result").show();
    event.preventDefault();
  });
});
