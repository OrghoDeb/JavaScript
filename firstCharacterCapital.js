function firstCharacterCapital (firstName, lastName){
  return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " +
  lastName.charAt(0).toUpperCase() + lastName.slice(1)}
console.log(`Hello ${firstCharacterCapital("bhaskar", "deb")}`);


// Another Way
function nameCharacterCapital (name){
    return name.split(' ').slice(0, 1, -1).join('').charAt(0).toUpperCase()+
    name.split(' ').slice(0,-1).join('').slice(1)+ " " + name.split(' ').slice(-1).join('').charAt(0).toUpperCase()+
    name.split(' ').slice(-1).join('').slice(1)
  }
  console.log(`Hello ${nameCharacterCapital("bhaskar deb")}`);

  //First character of Each Word in capital
  function capital(name){
    const array = name.toLowerCase().split (" ")
    const titleCase = array.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    return titleCase.join(' ')
  }

  console.log(`Hello ${capital("rajib kumar deb")}`)