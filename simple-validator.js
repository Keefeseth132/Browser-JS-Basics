var number = prompt('please enter your phone number with dashes');
alert(number.charAt(3) === '-' && number.charAt(7) === '-' && number.length === 12);

var birthDate = prompt('please enter your date of birth, xx/xx/xx');
alert(birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/' && birthDate.length === 7);

var postalCode = prompt('please enter your postal code');
alert(postalCode.length === 5);

// add state abv

var married = prompt('are you married?');
if ( married === 'yes' || married === 'no') {
	alert('true');
}
else {
	alert('false');
}