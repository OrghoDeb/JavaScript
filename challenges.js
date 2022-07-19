console.log("Task 1 = Write a function that takes two numbers as argument");
function summation(a, b) {
  return a + b;
}

console.log(summation(8, 9));

console.log(
  "\nTask 2 = Write a function that takes two values, return true if two values are of same type and values as equal"
);
function equality(val1, val2) {
  if (val1 === val2) {
    return "The Value you put is valid";
  } else {
    return "The Value you put is invalid ";
  }
}
console.log(equality("1", "1"));

console.log("\nTask 3 = Create a function that takes a value as arguemnt");
function valueType(a) {
  return a;
}
console.log(typeof valueType(true));

console.log("\nTask 4 = Return n numbered character of a String");
function characterCall(string, number) {
  return string.split("")[number];
}
console.log(`The character of the word is ` + characterCall("Bhaskar", 3));

console.log("\nTask 5 = Remove the first 3 characters from a string");
function removeChar(word) {
  return word.slice(3);
}
console.log(removeChar("Bhaskar Deb Arghya"));

console.log("\nTask 6 = Extract the last 3 characters from a string");
function extractChar(a) {
  return a.slice(-3);
}
console.log(extractChar("Bhaskar Deb Arghya"));

console.log("\n Task 7 = Extract the first 3 characters from a string");

function extractFirstChar(b) {
  return b.slice(0, 3);
}
console.log(extractFirstChar("Bhaskar Deb Arghya"));

console.log("\nTask 8 = Extract first half characters of a string");
function firstHalfExtract(string) {
  return string.slice(0, string.length / 2); //experimentalLine
}
console.log(firstHalfExtract("12345678"));

console.log("\nTask 9 = Remove the last 3 Characters of a string");
function removeLastChars(c) {
  return c.slice(0, -3);
}
console.log(removeLastChars("Bhaskar"));

console.log(
  "\nTask 10 = Create a function that returns a specific percentage of a number"
);
function perc(d, e) {
  return (100 / d) * e;
}
console.log(perc(100, 2));

console.log(
  "\nTask 11 = A function of six arguments which adds, subtracts, multiplies, divides and powers in order"
);
function maths(a, b, c, d, e, f) {
  const simple = ((a + b - c) * d) / e;
  const result = Math.pow(simple, f);
  return result;
}
console.log(maths(100, 2, 4, 3, 1, 4));

console.log(
  "\nTask 12 = Write a Function that returns as the percentage of the first argument as the second argument"
);
function percentage(a, b) {
  return (a / 100) * b;
}
console.log(percentage(20, 100));

console.log("\nTask 13 = Task to check if the number is even or not");
function even(a) {
  if (a % 2 == 0) {
    return "The number is even";
  } else {
    return "The Number is Odd";
  }
}
console.log(even(1));

console.log("\nTask 14 = Task to check if the number is whole");
function whole(a) {
  if (a % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

//10 % 2 =  5 % 2 = 0
console.log(whole(2.5));

console.log("\nTask 15 = Multiplication, division, and comparison operators");
function compMath(a, b) {
  if (b > a) {
    return a / b;
  } else {
    return a * b;
  }
}
console.log(compMath(10, 100));

console.log(
  "\nTask 16 = A task to count the number of strings from a specific string"
);
function stringCount(a, b) {
  return b.toLowerCase().split(a);
}
console.log(stringCount("a", ""));

console.log("\nTask 17 = A task to concat strings into one");

function myTest(a, b) {
  return a.includes(b) ? b.concat(a) : a.concat(b);
}
console.log(myTest("cake", "cheese"));
console.log(myTest("Java", "script"));
console.log(myTest("lips", "s"));
console.log(myTest(" think, therefore I am", "I"));

// write a function it takes two conditions, if a contains b then return you are ok else you are not ok

function checkFunction(a, b) {
  return a.includes(b) ? "You're Okay!" : "You're in trouble!";
}
console.log(checkFunction("bhaskar deb", "deb"));

console.log("\nTask 18 = A task to round a float to two decimals");
function decimalsNumber(a) {
  return Math.round((a + Number.EPSILON) * 100) / 100;
}
console.log(decimalsNumber(212335165.123141));

console.log("\nTask 19 = A task to split numbers into digits");
function splitNumbers(a) {
  return a.split("");
}
console.log(splitNumbers("40"));

function fixCharacter(a, b) {
  return a.replace("%", "") + b.replace("%", "").split("").reverse().join("");
}

console.log(fixCharacter("c%ountry", "edis"));

function myFunction(a, b) {
  return a
    .split("")
    .reverse()
    .join("")
    .substring(0, 3)
    .concat(b)
    .concat(a.split("").reverse().join("").substring(3, a.length))
    .split("")
    .reverse()
    .join("");
}

console.log(myFunction("1234567", "."));
