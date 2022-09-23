function square(a){
  var area=a*a;
  return area;
}

function rectangle(a,b){
  var area=a*b;
  return area;
}

function circle(r){
  var area=3.14*r*r;
  return area;
}

module.exports={
  square:square,
  rectangle:rectangle,
  circle:circle,
}