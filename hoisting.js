//hoisting
var variable = 20;
(() => {
  console.log(variable);
  var variable = 10;
  console.log(variable);
})();
var variable = 30;
console.log(variable);



//eventloop
//pollyfills
//how js gets execulted in js
// react optimization tools
//curry method
