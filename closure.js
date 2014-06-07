// example of closure
// immediately invoked function runs once
// the variable "names" is still available in
// the returned function even though the II function is done

var digit_name = (function() {
  var names = ['zero','one','two','three','four','five'
               'six','seven','eight','nine'];
  return function (n) {
    return names[n];
  };
}());

alert(digit_name(1)); // "one"
alert(digit_name(5)); // "five"
alert(digit_name(9)); // "nine"