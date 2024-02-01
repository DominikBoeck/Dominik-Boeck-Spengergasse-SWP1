console.log('app.js beginnt.');
console.log('app.js endet.');

function plus(a, b) {
    var summe = a + b;
    return summe;
}

function kleinerAls5(wert) {
    return wert < 5;
}

function wurzel(zahl) {
    return Math.sqrt(zahl);
}

function schleife() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function istPrim(zahl) {
    if (zahl <= 1) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(zahl); i++) {
        if (zahl % i === 0) {
            return false;
        }
    }
    
    return true;
}

for (var num = 1; num <= 1000; num++) {
    if (istPrim(num)) {
        console.log(num);
    }
}

