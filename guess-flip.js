// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--number=` on the command line after `node flips.js`.
import minimist from 'minimist'
// Define allowed argument name 'number'.
const args = minimist(process.argv.slice(2))
// Define a const `number` using the argument from the command line. 
args['call']
const call = args.call || process.env.CALL || "heads"

// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips, flipACoin } from './modules/coin.mjs'
console.log(flipACoin(call))
