const fs = require('fs');
const { start } = require('repl');

console.time('num finder');

//Answer #1
fs.readFile(__dirname + '/entries.txt', (err, data) => {
    const numArray = data.toString().replace(/\r/g, "").split('\n');
    let answer = numArray.map((val, a)=> {
        let num = Number(val);
        for(var b = 0; b < numArray.length; b++) {
            if(num + Number(numArray[b]) === 2020) {
                return {
                    value: num,
                    index: a+1
                };
            }
        }
    })

    answer = answer.filter(value => value != undefined).flat();
    console.log(`${answer[0].value} at position ${answer[0].index} + ${answer[1].value} at position ${answer[1].index} = 2020`);
    console.log(`The product of both numbers is ${answer[0].value * answer[1].value}`)
});

//Answer #2
fs.readFile(__dirname + '/entries.txt', (err, data) => {
    const numArray = data.toString().replace(/\r/g, "").split('\n');
    let startValue = 2020;
    answer2 = numArray.map((val, i) => {
        for(var a = 0; a < numArray.length; a++) {
            for(var b = 0; b < numArray.length; b++) {
                if(Number(val)+Number(numArray[a])+Number(numArray[b]) === 2020) {
                    return {
                        value: val,
                        index: i+1
                    }
                }
            }
        }
    });
    answer2 = answer2.filter(value => value != undefined).flat();
    
    console.log(`The sum of the numbers ${answer2[0].value} ${answer2[1].value} and ${answer2[2].value}
    at positions ${answer2[0].index} ${answer2[1].index} and ${answer2[2].index} = 2020`);
    console.log(`The product is ${answer2[0].value * answer2[1].value * answer2[2].value}`)
});

console.timeEnd('num finder');