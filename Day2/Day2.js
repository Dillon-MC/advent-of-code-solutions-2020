const fs = require('fs');

//Answer 1
fs.readFile(__dirname + '/passwords.txt', (err, data) => {
    const passwordData = getPasswordsAndPolicies(data);
    const passwordsArray = passwordData.pwArray;
    const policies = passwordData.policies;

    let validPasswords = 0;

    for (const a in passwordsArray) {
        let charOccurrences = passwordsArray[a].split(policies[a][policies[a].length-1]).length-1;
        let minmaxOccurences = policies[a].replace(/\D/g, ' ').toString().trim().split(' ');
        if(charOccurrences >= minmaxOccurences[0] && charOccurrences <= minmaxOccurences[1]) {
            validPasswords++;
        }
    }

    console.log(`Answer #1: There are ${validPasswords} valid passwords out of ${passwordsArray.length}.`)
});



//Answer 2
fs.readFile(__dirname + '/passwords.txt', (err, data) => {
    const passwordData = getPasswordsAndPolicies(data);
    const passwordsArray = passwordData.pwArray;
    const policies = passwordData.policies;

    let validPasswords = 0;

    for (const a in passwordsArray) {
        let positions = policies[a].replace(/\D/g, ' ').toString().trim().split(' ');
        let requiredChar = policies[a][policies[a].length-1].toString();
        if(!(passwordsArray[a][Number(positions[0])-1] === requiredChar && passwordsArray[a][Number(positions[1])-1] === requiredChar)) {
            if(passwordsArray[a][Number(positions[0])-1] === requiredChar || passwordsArray[a][Number(positions[1])-1] === requiredChar) {
                validPasswords++;
            }
        }
    }

    console.log(`Answer #2: There are ${validPasswords} valid passwords out of ${passwordsArray.length}.`)
});



function getPasswordsAndPolicies(passwords) {
    let pwArray = passwords.toString().replace(/\r/g, "").split('\n');
    let policies = [];
    pwArray = pwArray.map(pw => {
        policies.push(pw.substring(0, pw.indexOf(':')));
        return pw.substr(pw.indexOf(':')+1).trim();
    });

    return {
        pwArray,
        policies
    };
}