var number = prompt('please enter your phone number with dashes');
alert(number.charAt(3,7) === '-');

var birthDate = prompt('please enter your date of birth, xx/xx/xx');
alert(birthDate.charAt(2,5) === '/');

var postalCode = prompt('please enter your postal code');
alert(postalCode.length === 5);

var married = prompt('are you married?');
if ( married === 'yes' || married === 'no') {
	alert('true');
}
