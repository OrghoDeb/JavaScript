function firstCharacterCapital (firstName, lastName){
  return firstName.charAt(0).toUpperCase() + firstName.slice(1) +
  lastName.charAt(0).toUpperCase() + lastName.slice(1)}
console.log(`Hello ${firstCharacterCapital("bhaskar ", "deb")}`);


// Another Way
function firstCharacterCapital (name){
    return name.split(' ').slice(0,-1).join('').charAt(0).toUpperCase()+
    name.split(' ').slice(0,-1).join('').slice(1) + name.split(' ').slice(-1).join('').charAt(0).toUpperCase()+
    name.split(' ').slice(-1).join('').slice(1)
  }
  console.log(`Hello ${firstCharacterCapital("bhaskar deb")}`);