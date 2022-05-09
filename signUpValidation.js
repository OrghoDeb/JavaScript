function emailValidation(email, confirmEmail) {
  if (email.toLowerCase()===confirmEmail.toLowerCase()){
    return "Your E-mail is valid"
  }
  else{
    return "Your E=mail is invalid"
  }
}



function passwordValid(password, confirmPassword) {
  if (password !== confirmPassword){
    return "Your password does not match"
  } else{
    return "Yeah password match 👻"
  }
}



function lowerCase(name) {
  return name.toLowerCase()
}
