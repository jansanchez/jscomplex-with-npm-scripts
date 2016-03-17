/*
file: index.js
*/

var i;
var fibonacci = []; // Initialize array!

fibonacci[0] = 0;
fibonacci[1] = 1;

for(i=2; i<=10; i++){
	// Next fibonacci number = previous + one before previous
	fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
	console.log(fibonacci[i]);
}
