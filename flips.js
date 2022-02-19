// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--number=` on the command line after `node flips.js`.
const min = require('minimist')
import minimist from 'minimist'
// Define allowed argument name 'number'.
//const args = require('minimist')(process.argv.slice(2))
//const args = process.argv.slice(2)
var argv = parseArgs(args, opts={})
console.log(argv);
// Define a const `number` using the argument from the command line. 
args['number']
const number = args.number || process.env.NUMBER || 1
console.log(number);

// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from './modules/coin.mjs'
// Call the coinFlip function and put the return into STDOUT
var flipArray = coinFlips(number)
console.log(flipArray)
console.log(countFlips(flipArray))
