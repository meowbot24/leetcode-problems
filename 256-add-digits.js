// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// split up integer into single digits
	// convert integer to string
	// split up the string into array of substrings
	// convert substrings into integers
// add up digits
// check if sum is a single digit
// if sum is a single digit, return it
// if sum is not a single digit, split sum integer into single digits, and so on

var num = 56;

// function to split integer into array of digits
function splitInteger(integer) {
	var intString = integer.toString().split("");

	var digitArray = [];

	// loop through substring array to create array of integers

	for (var i=0; i < intString.length; i++) {
		digitArray[i] = parseInt(intString[i], 10);
	}

	return digitArray;
}

// function to add array of digits and check if result is a single digit
function addDigits(digits) {

	var sum = 0;

	// add up integers in array
	for (var i=0; i < digits.length; i++) {
		sum += digits[i];
	}

	return sum;
}


// function to determine numbers of digits in sum
function numDigits(arrayOfDigits) {
	// convert sum to array to check array length/number of digits
	var sumArray = arrayOfDigits.toString().split("");

	var numofDigits = sumArray.length;

	return numofDigits;
}


// combines all functions
function findResult(input) {

	var splitInt = splitInteger(input);
	var digitSum = addDigits(splitInt);

	var numberOfDigits = numDigits(digitSum);

	if (numberOfDigits === 1) {
		console.log("type: " + typeof(digitSum) + digitSum);
		return digitSum;
	} else {
		console.log("type: " + typeof(digitSum) + digitSum);
		findResult(digitSum);
	}

}

var result = findResult(num);
console.log("Result " + result);

