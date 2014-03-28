/* adapted from JavaScript Patterns by Stoyan Stefanov
   copyright 2010, O'Reilly
   pp 76-77
*/   


var myFunc = function memoizer(param) {
  /* name the function (memoizer) so that you can refer to it within
     the body of the function like memoizer.cache and avoid
     using the var that's assigned the function (myFunc here)
  */
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