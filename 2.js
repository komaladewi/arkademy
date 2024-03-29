function is_username_valid(username) {
  var lowercaseRe = /[a-z]/g;
  
	if(username.length == 5 && username.match(lowercaseRe).length == username.length) {
    	return true;
    }
    return false;
}

function is_password_valid(password) {
	var lowercaseRe = /[a-z]/g;
  
  var uppercaseRe = /[A-Z]/g;
  var numberRe = /[0-9]{1,2}/g;

  var specialRe = /[_@#$%]/g;

  if(password.length == 7
     && lowercaseRe.test(password)
     && uppercaseRe.test(password)
     && numberRe.test(password)
     && specialRe.test(password)) {
     return true;
  }

  return false;