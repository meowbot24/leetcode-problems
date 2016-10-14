// Given an array of integers, every element appears twice except for one. Find that single one.

// does this number have a duplicate in the array? if so, check the next element
// if there is no duplicate, it is the single element, stop checking further


numbers = [3,5,1,6,-65,3,16,7,6,5,1,16,7,8,8,42,32,42,32,5,5,5];

var singleNumber = function(nums) {

	var singleElement;

	// singleElement only exists once in the array
	// evaluate each element against every other element

	for (var i=0; i < nums.length; i++) {

		var evalBool = true;

		for (var m=0; m < nums.length; m++) {
			console.log(nums[i] + " evaluated against " + nums[m]);
			if (i === m) {
				evalBool = true;
			} else if (nums[i] === nums[m]) {
				evalBool = false;
				m = (nums.length - 1);
			}
		}

		if (evalBool === true) {
			singleElement = nums[i];
			console.log("Single element is " + singleElement);
			i = (nums.length - 1);
		}

	}

	return singleElement;

};

var answer = singleNumber(numbers);

console.log("The single element is " + answer);
