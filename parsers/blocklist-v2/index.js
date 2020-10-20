// imports
const akn = require('./akomaNtosoDocument');
const antlr4 = require('antlr4/index');
const AknLexer = require('./AknLexer');
const AknParser = require('./AknParser');
const CustomAknListener = require('./CustomAknListener');

const main = (input, output_formats) => {
    var aknDoc = new akn.AkomaNtosoDocument();
    const inputChars = new antlr4.InputStream(input);
    const aknLexer = new AknLexer.AknLexer(inputChars);
    const tokens  = new antlr4.CommonTokenStream(aknLexer);
    let aknParser = new AknParser.AknParser(tokens);
    aknParser.buildParseTrees = true;
    let tree = aknParser.doc();
    const aknListener = new CustomAknListener.CustomAknListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT.walk(aknListener, tree);
    aknListener.aknDocument.generateAllIDs();
    aknListener.aknDocument.generateNamespace();
    return {
        "xml": aknListener.aknDocument.getXML(), 
        "json": aknListener.aknDocument.getJSONObject(),
    };
};



/* const main = (input) => {
    var aknDoc = new akn.AkomaNtosoDocument();
    const inputChars = new antlr4.InputStream(input);
    const aknLexer = new AknLexer.AknLexer(inputChars);
    const tokens  = new antlr4.CommonTokenStream(aknLexer);
    let aknParser = new AknParser.AknParser(tokens);
    aknParser.buildParseTrees = true;
    let tree = aknParser.doc();
    //console.log(" Tree == ", tree);
    const aknListener = new CustomAknListener.CustomAknListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT.walk(aknListener, tree);
    aknListener.aknDocument.generateAllIDs();
    aknListener.aknDocument.generateNamespace();

    return {
        "xml": {
            "akn": aknListener.aknDocument.getXML()
        },
        "json": aknListener.aknDocument.getJSONObject()
    };

};
 */

module.exports = {
    main: main,
    version: () => "1.0.0"
}