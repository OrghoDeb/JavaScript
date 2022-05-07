
function weatherUpdate(temp) {
  if (temp>35 & temp<=135){
    return "It's hot in here!!"
  }
  else if (temp>25 & temp<=35){
    return "It's mildly hot"
  }
  else if(temp>18 & temp<=25){
    return "It's a nice weather"
  }
  else if(temp>=10 & temp<=18){
    return "It's kinda cold"
  }
  else {
    return  "It's freeeeezziiingggg"
  }
}
console.log(weatherUpdate(10));
console.log(weatherUpdate(40));
console.log(weatherUpdate(30));