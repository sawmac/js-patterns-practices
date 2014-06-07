// function to run a function only once

function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

var justThisOneTime = once(function() {
  alert("I'm only going to say this once.");
});

justThisOneTime(); // alert "I'm only going to say this once."
justThisOneTime(); // crickets