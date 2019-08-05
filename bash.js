process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    
    //process.stdout.write('You typed: ' + cmd);
    if(cmd === 'pwd') {
        process.stdout.write(process.cwd());
    }
    //test comment
    
    process.stdout.write('\nprompt > ');
})