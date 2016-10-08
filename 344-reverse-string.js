// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".


function reverseString(str) {
	var newStr = str.split("").reverse().join("");
	return newStr;
}

var reversed = reverseString("hello");

console.log(reversed);

