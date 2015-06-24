var tripleFive = function(){
}

for (i = 0; i < 3; i++){
	console.log('Five!')
}

var lastLetter = function(word){
	return word.slice(-1)
}

console.log(lastLetter('hello'));
console.log(lastLetter('island'));

var square = function(number){
	return number * number;
}

console.log(square(3));
console.log(square(5));

var negate = function(number){
	return number * -1;
}

console.log(negate(8));
console.log(negate(-5));

var toArray = function(x, y, z){
	var theArray = [];
	theArray.push(x, y, z);
	return theArray;
}

console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));

var startsWithA = function(string){
	if (string.toUpperCase().charAt(0) === "A"){
		return true;
}
	else {
		return false;
 }
}

console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));

var excite = function(string){
	return string + '!!!'
}

console.log(excite('yes'));
console.log(excite('go'));

var sun = function(string){
	if(string.indexOf('sun') === -1){
		return false;
	}
	else {
		return true;
 }
}
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

var tiny = function(number){
	if(number >= 0 && number <= 1){
		return true;
	}
	else {
		return false;
 }
}
console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

var getSeconds = function(string){
var	parts = string.split(':'),
			minutes =+ parts[0],
			seconds =+ parts[1]
		return (minutes * 60 + seconds);
}
console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));