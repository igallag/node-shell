process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const fs = require('fs');

//console.log(cat)
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    const cmdArr = cmd.split(' ');

    const command = cmdArr[0];
    const fileName = cmdArr[1];




    //process.stdout.write('You typed: ' + cmd);
    if (command === 'pwd') {
        pwd();
    }

    if (command === 'ls') {
        ls();
    }

    if (command === 'cat') {
        cat(fileName);
    }    

    //process.stdout.write('\nprompt > ');
})
