const firstName="Bhaskar"
const lastName= "Deb"

function nameShortcut(firstName, lastName){
    return firstName.substr(0, 1) + lastName.substr(0,1)
}

function nameUpperCasing(upperCase)
{
    return upperCase.toUpperCase()
}
function nameLowerCasing(lowerCase)
{
    return lowerCase.toLowerCase()
}
function emailValidation(email, confirmEmail)
{
    if(email.toLowerCase()===confirmEmail.toLowerCase()){
        return "your E-mail Address matches"
    }
    else {
        return "Sorry, Your E-mail Address Does not match"
    }
}
function passwordValidation (password, confirmPassword)
{
    if(password === confirmPassword){
        return "Your Password matches as well"
    }
    else {
        return "Your password doesn't match"
    }
}

console.log(`Hello`, nameShortcut("Bhaskar", "Deb")+"!", `Welcome to Google.com.`)
console.log("Here as you can see", emailValidation("orghodeb@gmail.com","orghodeb@gmail.com")+", and", passwordValidation("Limit","Limit")+"!")
console.log("So now you don't have anything to worry about! You're all good to go! Enjoy Wasting our free storage")