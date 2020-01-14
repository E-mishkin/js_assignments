for (var i = 1; i < 101; i++) {
    if ((i%3 === 0) && (i%5 === 0)) {
        console.log("Hee Haw!");
    } else if (i%3 === 0) {
        console.log("Hee!");
    }
    else {
        console.log(i);
    }
}

function heeHaw() {
    var num = prompt("Enter any number");
    if (isNaN(num)) {
        console.log("Invalid input");
    } else {
        for (var i = 1; i <= num; i++) {
            console.log(i);
        }
    }
}

heeHaw();