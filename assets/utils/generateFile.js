const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            
            if (err) {
                reject(err); 
                
            }

            
            resolve({
                ok: true,
                message: 'Congratulations your READMe file has been created!'
            });
        });
    });
};


module.exports = { writeFile };