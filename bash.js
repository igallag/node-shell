process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
//const fs = require('fs');
const curl = require('./curl');

//console.log(cat)

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ')
}

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    const cmdArr = cmd.split(' ');

    const command = cmdArr[0];
    const arg = cmdArr[1];




    //process.stdout.write('You typed: ' + cmd);
    if (command === 'pwd') {
        pwd(done);
    }

    if (command === 'ls') {
        ls(done);
    }

    if (command === 'cat') {
        cat(arg , done);
    }

    if (command === 'curl') {
        //console.log(arg);
        curl(arg, done);
    }

    //process.stdout.write('\nprompt > ');
})
