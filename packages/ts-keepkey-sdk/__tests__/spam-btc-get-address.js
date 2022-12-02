const { spawn } = require('node:child_process')

for (let index = 0; index < 100; index++) {
    const btcGetAddress = spawn('node', ['./btc-get-address.js']);
    btcGetAddress.stdout.on('data', (data) => {
        console.log(`stdout ${index}: ${data}`);
    });

    btcGetAddress.stderr.on('data', (data) => {
        console.error(`stderr ${index}: ${data}`);
    });

    btcGetAddress.on('close', (code) => {
        console.log(`child process ${index} exited with code ${code}`);
    });
}