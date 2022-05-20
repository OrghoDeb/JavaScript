function name(value) {
  if (value.length === 0) {
    return "You didn't put any name here";
  } else {
    return `Hello ${value}`;
  }
}
console.log(name(""));

function whiteSpaceRemoval(val) {
  return val.trim();
}
console.log(whiteSpaceRemoval("  Hello World   "));

function converstion(stringToArray) {
  return stringToArray.split(" ");
}
console.log(converstion("Helllo World"));

function spaceRemoveAndArray(value) {
  return value.trim().split(" ");
}
console.log(
  spaceRemoveAndArray("   A Quick Brown Fox Jumps Over A Lazy Dog    ")
);

function stringsAndNumbers(word, number) {
  return word.split(" ")[number];
}
console.log(`Hi ${stringsAndNumbers("Hello World!!!", 0)}`);
console.log(stringsAndNumbers("Alak Kumar Dam", 0));
