/* adapted from JavaScript Patterns by Stoyan Stefanov
   copyright 2010, O'Reilly
   pp 76-77
*/   


 var myFunc = function memoizer(param) {
  // name the function (memoizer) so that you can refer to it within
  // the body of the function like memoizer.cache and avoid

	if (! memoizer.cache[param]) {
		var result={};
		// do bunch of expensive computations that you want to store in cache
		//simulate for this demo
		console.log('running expensive process')
		result = 'result of processing ' + param;
		memoizer.cache[param] = result;
	}
	return memoizer.cache[param];
}
myFunc.cache={};
myFunc('node1');
console.log(myFunc.cache.node1);
myFunc('node1');
console.log(myFunc.cache.node1);
myFunc('node2');
console.log(myFunc.cache.node2);
myFunc('node2');
console.log(myFunc.cache.node2);
console.log(myFunc.cache);


/* from JavaScript the Good Parts by Douglas Crockford
   copyright 2010, O'Reilly
*/

var fibonacci = (function (  ) {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}( ));
console.log(fibonacci(3));


// generic memoizer function from Douglas Crockford
var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});
console.log(fibonacci(10)); // 55

var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n - 1);
});
console.log(factorial(5)); // 110