const path = require('path');

const fs = require('fs');
const solc = require('solc');

const piyangoPath = path.resolve(__dirname, 'contracts','piyango.sol');

const source = fs.readFileSync(piyangoPath,'utf8');

module.exports = solc.compile(source, 1).contracts[':Piyango'];

console.log(solc.compile(source, 1))

console.log(module.exports)

