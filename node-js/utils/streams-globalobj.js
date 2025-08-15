const fs = require('fs');

function workingWithStreamsAndBuffers() {
    // create a readable stream instance to read the information from a file
    let isBuffer = false
    if (isBuffer) {
        let readableStream = fs.createReadStream('./files-input-output/personal-info.txt', { encoding: 'utf-8' });
        let writeableStream = fs.createWriteStream('./files-input-output/output-info.txt');

        readableStream.pipe(writeableStream);

        // print the statements which shows that you are dealing with streams

        readableStream.on('data', (chunk) => {
            console.log('RECIEVED CHUNK', chunk)
        });

        readableStream.on('end', () => {
            console.log('finished reading data from a file');
        });

        writeableStream.on('finish', () => {
            console.log('finished writing to a file');
        })
    } else {
        fs.readFile('./files-input-output/personal-info.txt', (err, data) => {
            if (err) {
                console.error(err)
            };

            // print the buffer data
            // we need to write this buffered data to a file

            let modifiedData = Buffer.from(data.toString().toUpperCase())

            fs.writeFile('output-info.txt', modifiedData, (err) => {
                if (err) {
                    console.log('err while writing the data to a file')
                }
            })

        })
    }
}

function globalObjects() {
    console.log('Directory name', __dirname);
    console.log('File Path name', __filename);
    global.customerName = "Juan Whitby";
    console.log('Custom global variable', global.customerName);

    setTimeout(() => {
        console.log('this is executing from settimeout')
    }, 1000);

    let currentWorkingDirectory = process.cwd()
    console.log(currentWorkingDirectory);
    let nodeJsVersion = process.version;
    console.log('Node js version', nodeJsVersion)
}

module.exports = { workingWithStreamsAndBuffers, globalObjects }