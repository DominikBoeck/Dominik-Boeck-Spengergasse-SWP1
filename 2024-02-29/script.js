const { fakerDE } = require('@faker-js/faker');

for (let i = 0; i < 10; i++) {
    console.log(fakerDE.airline.airplane().name);
}
for (let i = 0; i < 10; i++) {
    console.log(fakerDE.finance.iban());
}


