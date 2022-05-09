function BangladeshTimeFormat(date){
  return date.toLocaleDateString("bd-BD", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
}

function FinnishTimeFormat(date){
  return date   
}

const result = BangladeshTimeFormat(new Date())
const result2 = FinnishTimeFormat(new Date())

// console.log(result)
// console.log(result2);


// compare time 


const today =  new Date()


var sevenDays = new Date();
sevenDays.setDate(sevenDays.getDate() + 7);


function compareSevenDaysHours(date1, date2) {
  return  date2 
}

function compareSevenDaysMins(date1, date2) {
  return  date2
}

function compareSevenDaysSecond(date1, date2) {
  return  date2
}
console.log(compareSevenDaysHours(today, sevenDays ));