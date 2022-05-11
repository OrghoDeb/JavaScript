function passwordStrength(password){
    if (password.length>0 & password.length<8){
        return "Your Password is Weak!"
    }
    else if (password.length>=8  & password.length<=10){
        return "Your Password is Moderate"
    }
    else if(password.length>10){
        return "Your Password is GOOD TO GO!"
    }
    else {
        return "Please enter a password"
    }
   
}

console.log(passwordStrength(""));