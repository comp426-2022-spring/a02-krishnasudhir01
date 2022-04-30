// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--number=` on the command line after `node flips.js`.
import minimist from 'minimist';
//import 'module';

// Define allowed argument name 'number'.
const args = require("minimist")(process.argv.slice(2));
const args = minimist(process.argv.slice(2));

// Define a const `number` using the argument from the command line. 
args['call']
const call = args.call || process.env.CALL;
import { coinFlips, countFlips, flipACoin } from './modules/coin.mjs';



if (call ==null){
	console.log("Error: no input.");
	process.exit();
}
/*if (!call || call.length == 0) {
	console.error("Error: no input")
}*/
else if(call != 'heads' && call != 'tails') {
	console.log("Usage: node guess-flip.js --call=[heads|tails]")
}
else {
// Import the coinFlip function from your coin.mjs file
	console.log(flipACoin(call))
}
