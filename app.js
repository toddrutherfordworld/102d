'use strict'

function yourCoffee() {
    let coffee = prompt('What coffee is your favorite ');

    return document.write(coffee);
}

function timeOfCoffee() {
    let coffee = prompt('What Can I get Started for Today'); // 15;
    let message = '';

    if (coffee = espresso) {
        message = 'Welcome to Coffee House!';
    } else if (coffee === regular) {
        message = 'Chow!';
    } else if (coffee < doubleshot) {
        message = "Fuel Your Day";
    } else {
        message = "Sorry all out of that!";
    }

    return message;
}
