const {parserInfo} = require("./utils/parserutils");


const requireParams = (event, context) => {
    
    const {body} = event;
    
    if (body) {

        const {  parserName, document, outputFormats } = JSON.parse(body);
        
        if (!parserName || !document) {
            const errorMsg = "ERROR: The service expects a valid `parserName` and a valid `document` in the body";
            return {
                statusCode: 400,
                body: errorMsg
            }
        
        } else {

            const theParser =  parserInfo(parserName);
            if (theParser !== null) {
                return  {document: document, outputFormats: outputFormats, ...theParser};
            } else {
                const errorMsg = `ERROR: Invalid parserName: ${parserName}`;
                return {
                    statusCode: 400,
                    body: errorMsg
                };
            }
        }

    } else {

        const errorMsg = "ERROR: Body was not  provided";
        return {
            statusCode: 400,
            body: errorMsg
        };
    }

}


const requireAuth = async function (event, context) {
    return false;
};


const VALID_OUTPUT_FORMATS = [
    "xml",
    "json"
]


const parseDocument = async (input, parserName, outputFormats) => {
    const parser = require(`../parsers/${parserName}`);
    let parserOutputFormats  = [];
    if (outputFormats) {
        var _passedOutputFormats = outputFormats.split(",");
        if (_passedOutputFormats.length > 0) {
            parserOutputFormats  = _passedOutputFormats.filter( passedItem => VALID_OUTPUT_FORMATS.includes(passedItem) );
        }
    } else {
        parserOutputFormats.push("all");
    }
    const final = await parser.main(input, passedOutputFormats);
    return final;
}

exports.handler = async function(event, context) {

    const paramsReq =  requireParams(event, context);

    if (paramsReq.statusCode) {
        // error code
        return paramsReq;
    } else {
        const {document, outputFormats, name} = paramsReq;
        //const parsed = await parseDocument(document, name, outputFormats);
        return {
            statusCode: 200,
            body: JSON.stringify(paramsReq)
        };
    }
}


