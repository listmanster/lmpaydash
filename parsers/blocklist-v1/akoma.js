// imports
const akn = require('./akomaNtosoDocument');
const fs = require('fs');
const antlr4 = require('antlr4/index');
const AknLexer = require('./AknLexer');
const AknParser = require('./AknParser');
const CustomAknListener = require('./CustomAknListener');
const akndo = require('akomando');

const main = (input) => {
    var akndoc = akndo.createAkomando({
        aknString: input
    });
    console.log(JSON.stringify(akndoc.getAkomaNtoso({
        serialize: 'JSON'
     })));
};



const myArgs = process.argv.slice(2);
if (myArgs[0].endsWith(".xml")) {
    const inputData = fs.readFileSync(myArgs[0], 'utf8');
    main(inputData);
} else {
    console.log("Invalid parameter !");
}
