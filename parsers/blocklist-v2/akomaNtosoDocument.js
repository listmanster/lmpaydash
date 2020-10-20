class AkomaNtosoDocument {
    
    constructor() {
        this.doc = {content: []}
    }

    initBlockList = () => {
        let aknBlockList =  {
            name: "akn__blockList", content: [
                {name: "akn__listIntroduction", content: [ ]},
                {name: "items", content: [ ]},
                {name: "akn__listWrapUp", content: [ ]}
                ]
            };
        return aknBlockList;
    };

    initBlockListItem = (content, num) => {

        let theItem = {
            "name": "akn__item",
            "content": []
        };

        if (num !== undefined) {
            theItem.content.push( {name: "akn__num", content:[{"text": num}]} );
        }
        if (content !== undefined) {
            theItem.content.push( {name: "akn__p", content: [{"text": content}]} );
        }

        return theItem;
    }

   
    getDocument = () => {
        return this.doc;
    }

    getJSON = () => {
        return JSON.stringify(this.doc);
    }


    idMap = (elementName) => {
        const eMap = {
            "akn__blockList": "list",
            "akn__listIntroduction": "intro",
            "akn__item": "item",
            "akn__listWrapUp": "wrapup"
        };

        if (elementName in eMap) {
            return eMap[elementName];
        } else {
            return null;
        }
    };

    getChildNum = (thisItem) => {
        if ("content" in thisItem && thisItem.content.length > 0 ) {
            const foundItem = thisItem.content.filter( childItem => childItem.name === "akn__num");
            if (foundItem.length > 0 ) {
                return foundItem[0].content[0].text.replace(/^([\(])?([A-Za-z0-9])([\)\.])/, "$2");
            } else {
                return null;
            }
        } else {
            return null;
        }
    };    

    generateIDs = (content, runningPref) => {
        return content.map( (item, index) => {
            if (item.name) {
                let fullLocalId;
                if (item.name.startsWith("akn__")) {
                    // only generate an id for these items
                    const idPref = this.idMap(item.name);
                    if (idPref !== null) {
                        const localId = idPref === "intro" || idPref === "wrapup" ? idPref: idPref + "_" + (index + 1);
                        fullLocalId = runningPref !== undefined ? runningPref + "__" + localId : localId;
                        item["@akn__eId"] = fullLocalId;
                    }
                }
                if ("content" in item &&  item.content.length > 0) {
                    item.content = this.generateIDs(item.content, fullLocalId === undefined? runningPref: fullLocalId );
                    return item;
                } else {
                    return item;
                }
            } else {
                return item;
            }
        });
    };

    generateAllIDs = () => {
        this.doc.content = this.generateIDs(this.doc.content);
    }

    generateNamespace = () => {
        const xmlnsMap = {
            "xmlns": "http://docs.oasis-open.org/legaldocml/ns/akn/3.0",
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance"
        };
        // add the NS to the root element        
        var rootElement = this.doc.content[0];
        const keys = Object.keys(xmlnsMap);
        for(const key of keys) {
            rootElement["@akn__" + key] = xmlnsMap[key] ;
        }
    }

    renderElement = (item) => {
        
        var elementStack = [];
        const props = Object.keys(item);
        const attrs = props.filter( item => item.startsWith("@akn"));
        
        if ("name" in item) {
            
            const name = item.name ;
            
            // check if akn element name, otherwise dont render element name !
            const isAknElement = name.startsWith("akn__");
            // check if has content
            const hasContent = "content" in item && item.content.length > 0;
            var aknElementName;

            if (isAknElement && hasContent) {
                aknElementName = name.replace("akn__", "").trim();
                elementStack.push(`<${aknElementName}`);
                const arrAttrs = attrs.map( attr => { return ` ${attr.replace("@akn__", "")}="${item[attr]}" `;}) ;
                elementStack = elementStack.concat(arrAttrs);
                elementStack.push(">");
            }

            if (hasContent) {
                var subItems = item.content.map( subItem => {
                    return this.renderElement(subItem)
                });
                subItems = subItems.flat();
                elementStack = elementStack.concat(subItems);
            }

            if (isAknElement && hasContent) {
                elementStack.push(`</${aknElementName}>`);
            }

        } else 
        if ("text" in item) {
            elementStack.push(item.text);
        } 
        return elementStack;
    }


    getXML = () => {
        var xmlDoc = [];
        const obj = this.doc.content;
        for (var i=0; i < obj.length; i++ ) {
            const item = obj[i];
            if (item.name.startsWith("akn__")) {
                xmlDoc = xmlDoc.concat(this.renderElement(item));
            }
        }
        return xmlDoc.join("");
    }

    getJSONObject = () => {
        return this.doc;
    }

};

exports.AkomaNtosoDocument = AkomaNtosoDocument;
