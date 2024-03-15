// q1)Reverse the string (Superman)

var originalString = "Superman";
var reversedString = "";

for (var i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
}

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

// q2) check if the string is palindrome or not

var inputString = "Was it a car or a cat I saw?";
var cleanString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
var reversString = "";

for (var i = cleanString.length - 1; i >= 0; i--) {
    reversString += cleanString[i];
}

var isPalindrome = cleanString === reversString;

console.log(inputString + " is a palindrome:", isPalindrome);


// q3) ask for the input of the user, and check alert the data type of input, if the user enters 88, it should show type: number

// Prompting the user for input
var userInput = prompt("Please enter something:");

// Checking the data type and alerting
if (userInput === '88') {
    alert("Type: number");
} else {
    alert("Type: " + typeof userInput);
}

// q4) check if the given array is consistent or not. e.g. [1,2,3,5,6,7] it is not consistent as after 3 gap is 2.

var arr = [1, 2, 3, 5, 6, 7];

var isConsistent = true;
var gap = arr[1] - arr[0]; // Calculate the initial gap

for (var i = 2; i < arr.length; i++) {
    // Check if the difference between current element and previous element is consistent
    if (arr[i] - arr[i-1] !== gap) {
        isConsistent = false;
        break; // If inconsistency found, exit the loop
    }
}

if (isConsistent) {
    console.log("The array is consistent.");
} else {
    console.log("The array is not consistent.");
}