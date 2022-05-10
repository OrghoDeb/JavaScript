const name="Bhaskar Deb"
function nameUpperCasing(upperCase)
{
    return upperCase.toUpperCase()
}
function nameLowerCasing(lowerCase)
{
    return lowerCase.toLowerCase()
}
function emailValidation(Email, confirmEmail)
{
    if(Email.toLowerCase()===confirmEmail.toLowerCase()){
        return "your E-mail Address matches"
    }
    else {
        return "Sorry, Your E-mail Address Does not match"
    }
}
function passwordValidation (password, confirmPassword)
{
    if(password===confirmPassword){
        return "Your Password matches as well"
    }
    else {
        return "Your password doesn't match"
    }
}
function BangladeshTimeFormat(date){
    return date.toDateString("bd-BD", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }
console.log(BangladeshTimeFormat(new Date(03/04/2000)))
console.log(`Hello ${name}! Welcome to Google.com.`)
console.log("Here as you can see", emailValidation("orghodeb@gmail.com","orghodeb@gmail.com")+", and", passwordValidation("Limit","Limit")+"!")
console.log("So now you don't have anything to worry about! You're all good to go! Enjoy Wasting our free storage")