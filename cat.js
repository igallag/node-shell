const fs = require('fs');


module.exports = function(fileName) {
    
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) throw err;
        
        for (let i = 0; i < files.length; i++){
            
            if (files[i] === fileName) {
                fs.readFile(fileName, (err, data) => {
                    if (err) throw err;
                    process.stdout.write(data);
                });
                
                
            }
        }
    })
}