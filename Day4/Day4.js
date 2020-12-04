const { strict } = require('assert');
const fs = require('fs');

//Answer #1
fs.readFile(__dirname + '/passports.txt', (err, data) => {
    const requiredFields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt']
    const passports = data.toString().replace(/\r/g, "").split('\n\n');
    const validPassports = passports.filter(data => {
        return requiredFields.every(field => data.includes(field));
    })
    console.log(`There are ${validPassports.length} valid passports.`);
});