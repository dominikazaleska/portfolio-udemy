function checkDriverAge(age) {
	if (age < 18) {
	    return "Sorry, you are too young to drive this car. Powering off";
	} else if (age === 18) {
	    return "Congratulations on your first year of driving. Enjoy the ride!";
	} else {
	    return "Powering On. Enjoy the ride!";
	}
}

checkDriverAge(92);

var checkDriverAge2 = function(age) {
	if (age < 18) {
	    return "Sorry, you are too young to drive this car. Powering off";
	} else if (age === 18) {
	    return "Congratulations on your first year of driving. Enjoy the ride!";
	} else {
	    return "Powering On. Enjoy the ride!";
	}
}

checkDriverAge2(12);
"Sorry, you are too young to drive this car. Powering off"