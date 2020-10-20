const parsers = require("../parsers.json");

const parserInfo = (name) => {
    const found = parsers.filter( parser => parser.name === name);
    if (found.length > 0) {
        return found[0];
    } else {
        return null;
    }
};

exports.parserInfo = parserInfo;