// function fixCharacter(a, b) {
//   const sol =
//     a.replace("%", "") + b.replace("%", "").split("").reverse().join("");
//   return sol.slice(0);
// }
// console.log(fixCharacter("c%ountry", "edis"));

// function addStr(a, b) {
//   return a.substring(0, 3) + b + a.substring(3, a.length);
// }

// let a = "This is a string";
// let b = "modyfied ";

// console.log(addStr(a, b));

// function myFunction(a, b) {
//   return a
//     .split("")
//     .reverse()
//     .join("")
//     .substring(0, 3)
//     .concat(b)
//     .concat(a.split("").reverse().join("").substring(3, a.length))
//     .split("")
//     .reverse()
//     .join("");
// }

// console.log(myFunction("1234567", "."));

function arrayInsert(a, b) {
  return a
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .map((e) => {
      return e.substring(0, 3) + b + e.substring(3, e.length);
    });
}
console.log(arrayInsert("1234567", "."));

function decimalsNumber(a) {
  return Number(a.toFixed(2));
}
console.log(decimalsNumber(212335165.12665464689));
