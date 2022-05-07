function emailCheck(email, confirmEmail) {
  if (email.toLowerCase() === confirmEmail.toLowerCase() ){
    return "Your email is valid"
    // google, Micrpsofy
  }else {
    return "Your email is invalid"
  }
 }
 
 console.log(emailCheck("ALAK@gmail.com", "alak@gmail.com"));


function passwordCheck(email, confirmEmail) {
  if (email.toLowerCase() === confirmEmail.toLowerCase() ){
    return "Password is valid"
    // google, Micrpsofy
  }else {
    return "Password is invalid"
  }
 }
 
 console.log(passwordCheck("orghordeb2003", "alak@gmail.com"));