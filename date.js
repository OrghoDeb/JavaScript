// // // var MyDate = new Date(); // today's date 


// // // MyDate.setDate(MyDate.getDate() + 7); // seven days in here // setDate's out is milli second 

// // // const MyDateString = ('' + MyDate.getDate()).slice(-2) + '/'
// // //              + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
// // //              + MyDate.getFullYear();


// // // console.log(MyDateString);



            
// // function DateFormat(today, addNewDays) {
// // today.setDate(today.getDate() +  addNewDays);
// //  const afterSevendaysDate=  today.getDate()
// //  const addZeroInfrontofDate =  ('0' + today.getDate()).slice(-2)
// //  const addZeroInfrontofMonth = ('0' + (today.getMonth()+1)).slice(-2)
// //  const year=  ''+today.getFullYear()
// //  return `After 3 month we will expect this date ${addZeroInfrontofDate}-${addZeroInfrontofMonth}-${year}`
// // }

// //  console.log(DateFormat(new Date(), 120))
// //  console.log(DateFormat(new Date(), 90))
// //  console.log(DateFormat(new Date(), 60))


// // function name(name, age, sex) {
// //   return `My name is ${name}. My age is ${age} and I'm a ${sex}`
// // }

// // console.log(name('Arghya', '22', 'male'))



// function add(a, b, c){
//     return a+b+c
// }
// console.log(add(22929293294,3,4))
// const date = new Date('14 Jun 2017 14:04:00 GMT+3');
// console.log(`Today is ${date.toUTCString()} in Finnish Time`);


const event = new Date(`4/03/2022 20:36 GMT+3`);

console.log(event.toUTCString());


var today  = new Date();

console.log(today.toLocaleDateString("bd-BD"));



