const { fakerDE } = require('@faker-js/faker');

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.airline.airplane().name);
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.finance.iban());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.hacker.verb());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.person.lastName());
}

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.animal.dog());
}

console.log("end")