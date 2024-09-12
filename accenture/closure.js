//closure
//must have a good knowledge of lexical scoping
function outer() {
  var variable = 10;
  function inner1() {
    let innerVar = 1000;
    console.log(variable);
  }

  function inner2() {
    console.log(variable);
    console.log(innerVar); //it gives error
  }
  inner1();
  inner2();
}
outer();

console.log("***********************************");
//closure
function outer() {
  var variable = 10;
  function inner() {
    console.log(variable);
  }
  return inner;
}

let func = outer();
func();

//   practically can be used in button click to change some properties if teh number of buttons are more than 1
