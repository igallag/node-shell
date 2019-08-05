process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const fs = require('fs');


process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();


    //process.stdout.write('You typed: ' + cmd);
    if (cmd === 'pwd') {
        pwd();
    }

    if (cmd === 'ls') {
        ls();
    }

    //process.stdout.write('\nprompt > ');
})
