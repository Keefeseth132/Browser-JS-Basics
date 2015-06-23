var numberOfVics = prompt('how many victims do you wish to enter?');

var vicArray = [];
var alertString = 'victims:'

for (i = 0; i < numberOfVics;  i++){
	var vicObject = {};
	vicObject.vicName = prompt('what is their name?');
	vicObject.vicNumber	= prompt('what is their phone number?');
	vicObject.vicStreet = prompt('what street do they live on?');
	vicArray.push(vicObject);
	alertString += '\n Name: ' + vicObject.vicName;
	alertString += '\n Number: ' + vicObject.vicNumber;
	alertString += '\n street: ' + vicObject.vicStreet;
	alertString += '\n'
	alertString += '\n' + 'volunteers:'
}
console.log(vicArray[0])

var volunteers = prompt('how many volunteers do you wish to enter?');

var volArray = [];

for (i = 0; i < volunteers; i++){
	var volObject = {};
	volObject.volName = prompt('what is their name?');
	volObject.volNumber	= prompt('what is their phone number?');
	volObject.volStreet = prompt('what street do they live on?');
	volArray.push(volObject);
	alertString += '\n Name: ' + volObject.volName;
	alertString += '\n Number: ' + volObject.volNumber;
	alertString += '\n street: ' + volObject.volStreet;
}
console.log(volArray[0])

alert(alertString);