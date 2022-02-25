// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--number=` on the command line after `node flips.js`.
import minimist from 'minimist'
// Define allowed argument name 'number'.
const args = minimist(process.argv.slice(2))
// Define a const `number` using the argument from the command line. 
args['number']
const number = args.number || process.env.NUMBER || 1

// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from './modules/coin.mjs'
// Call the coinFlip function and put the return into STDOUT
var flipArray = coinFlips(number)
console.log(flipArray)
var flipCounts = countFlips(flipArray)
console.log(flipCounts)
