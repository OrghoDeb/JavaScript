// // let a = 3
// // let b = 2
// // if (a>b) {
// //     console.log(a+ ` is greater than `+b);
// // }
// // else {
// //     console.log(`${b} is greater than ${a}`);
// // }


// // function isEqual(a,b)
// // {
// //     return a.toUpperCase() === b.toLowerCase()
// // }

// // console.log(isEqual("hi","HI"))

// const name="Hello There!"
// const lowerCase = name.toLowerCase()
// console.log(lowerCase)


// const name1= "Well Hello!"
// const upperName = name1.toUpperCase()
// console.log(upperName)


// function firstCharacterCapital (firstName, lastName){
//     return 
// }


// function nameChracters(name) {
//   return name.split(' ').slice(0,-1).join('').charAt(0).toUpperCase() +  name.split(' ').slice(-1).join('').charAt(0).toUpperCase()
//    console.log(name.slice(0,-1)) // string
//    return name.charAt(0).toUpperCase() + name.split(' ').slice(-1).join('').charAt(0).toUpperCase()
// }

// console.log(nameChracters("alak Kumer aDm"));
// console.log(nameChracters("alak Dam"));
// console.log(nameChracters("orgho rajob shama"));
// console.log(nameChracters("john doe"));

function firstCharacterCapital (name){
  return name.split(' ').slice(0,-1).join('').charAt(0).toUpperCase()+
  name.split(' ').slice(0,-1).join('').slice(1) + name.split(' ').slice(-1).join('').charAt(0).toUpperCase()+
  name.split(' ').slice(-1).join('').slice(1)
}
console.log(`Hello ${firstCharacterCapital("bhaskar deb")}`);

