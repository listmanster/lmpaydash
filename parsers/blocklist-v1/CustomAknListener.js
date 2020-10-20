const akn = require('./akomaNtosoDocument');
const aknListener = require('./AknListener');

function CustomAknListener() {
    this.aknDocument = new akn.AkomaNtosoDocument();
    this.docType = "custom"
    this.regexNumbered = new RegExp(/^([0-9]+\.)\s*([\w\W\s+]+)/g);
    this.regexAlpha = new RegExp(/^([\(]?[A-Za-z]+[\)\.]?)\s*([\w\W\s+]+)/g);
    aknListener.AknListener.call(this);
    return this;
}

CustomAknListener.prototype = Object.create(aknListener.AknListener.prototype);
CustomAknListener.prototype.constructor = CustomAknListener;

CustomAknListener.prototype.enterDoc = function(ctx) {
    ctx.context_meta = this.aknDocument.doc;
};



// Enter a parse tree produced by AknParser#akn_blockList.
CustomAknListener.prototype.enterAkn_blockList = function(ctx) {
    var parentOfBlockList = ctx.parentCtx.context_meta;
    var blockList = this.aknDocument.initBlockList();
    parentOfBlockList.content.push(blockList);
    ctx.context_meta = blockList;
};




// Enter a parse tree produced by AknParser#akn_listIntroduction.
CustomAknListener.prototype.enterAkn_listIntroduction = function(ctx) {
    var blockList = ctx.parentCtx.context_meta;
    blockList = setBlockListIntroWrapup(blockList, "akn__listIntroduction", ctx.getText());
    return blockList;
};


// Enter a parse tree produced by AknParser#akn_listWrapUp.
CustomAknListener.prototype.enterAkn_listWrapUp = function(ctx) {
    var blockList = ctx.parentCtx.context_meta;
    blockList = setBlockListIntroWrapup(blockList, "akn__listWrapUp", ctx.getText());
    return blockList;
};


// Enter a parse tree produced by AknParser#akn_items.
CustomAknListener.prototype.enterAkn_items = function(ctx) {
    // pass it down
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#akn_itemNum.
CustomAknListener.prototype.enterAkn_itemNum = function(ctx) {
    var blockList = ctx.parentCtx.context_meta;
    // get blank blockList <item>
    var blockListItem = this.aknDocument.initBlockListItem();
    setBlockListItem(blockList, blockListItem);
    ctx.context_meta = blockListItem;    
    //ctx.context_elem = "akn__blockList>akn__item";
};


// Enter a parse tree produced by AknParser#item_numbered_line.
CustomAknListener.prototype.enterItem_numbered_line = function(ctx) {
    ctx.context_meta = ctx.parentCtx.context_meta;
    //if (ctx.parentCtx.context_elem) {
    //    ctx.context_elem = ctx.parentCtx.context_elem;
    //}
};

// Enter a parse tree produced by AknParser#numbered_sentence.
CustomAknListener.prototype.enterNumbered_sentence = function(ctx) {
    
    var contextItem = ctx.parentCtx.context_meta;

    // match for nums
    const sentenceText = ctx.getText().trim();
    const matches = Array.from(sentenceText.matchAll(this.regexNumbered));

    if (matches.length > 0 ) {
        const foundGroups = matches[0];
        // check if the context item is an item in a blockList
        if (contextItem.name === "akn__item") {
            const akn_num = foundGroups[1];
            const akn_p = foundGroups[2];
            contextItem.content.push(
                {name: "akn__num", content: [{"text": akn_num }]}
            );
            contextItem.content.push(
                {name: "akn__p", content: [{"text": akn_p }]}
            );
        }
    } else {
        // no number matched, set it as ordinary para
        if (contextItem.name === "akn__item") {
            contextItem.content.push(
                {name: "akn__p", content: [{"text": sentenceText}]}
            );
        }
    }
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#akn_blockList_alpha.
CustomAknListener.prototype.enterAkn_blockList_alpha = function(ctx) {
    var parentOfBlockList = ctx.parentCtx.context_meta;
    var blockList = this.aknDocument.initBlockList();
    parentOfBlockList.content.push(blockList);
    ctx.context_meta = blockList;
};


// Enter a parse tree produced by AknParser#akn_items_alpha.
CustomAknListener.prototype.enterAkn_items_alpha = function(ctx) {
    // pass it down
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#akn_itemAlpha.
CustomAknListener.prototype.enterAkn_itemAlpha = function(ctx) {
    var blockList = ctx.parentCtx.context_meta;
    // get blank blockList <item>
    var blockListItem = this.aknDocument.initBlockListItem();
    setBlockListItem(blockList, blockListItem);
    ctx.context_meta = blockListItem;    
};

// Enter a parse tree produced by AknParser#item_alpha_line.
CustomAknListener.prototype.enterItem_alpha_line = function(ctx) {
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#alpha_sentence.
CustomAknListener.prototype.enterAlpha_sentence = function(ctx) {
    var contextItem = ctx.parentCtx.context_meta;

    // match for nums
    const sentenceText = ctx.getText().trim();
    const matches = Array.from(sentenceText.matchAll(this.regexAlpha));

    if (matches.length > 0 ) {
        const foundGroups = matches[0];
        // check if the context item is an item in a blockList
        if (contextItem.name === "akn__item") {
            const akn_num = foundGroups[1];
            const akn_p = foundGroups[2];
            contextItem.content.push(
                {name: "akn__num", content: [{"text": akn_num }]}
            );
            contextItem.content.push(
                {name: "akn__p", content: [{"text": akn_p }]}
            );
        }
    } else {
        // no number matched, set it as ordinary para
        if (contextItem.name === "akn__item") {
            contextItem.content.push(
                {name: "akn__p", content: [{"text": sentenceText}]}
            );
        }
    }
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#akn_blockList_bullet.
CustomAknListener.prototype.enterAkn_blockList_bullet = function(ctx) {
    var parentOfBlockList = ctx.parentCtx.context_meta;
    var blockList = this.aknDocument.initBlockList();
    parentOfBlockList.content.push(blockList);
    ctx.context_meta = blockList;
};

// Enter a parse tree produced by AknParser#akn_items_bullet.
CustomAknListener.prototype.enterAkn_items_bullet = function(ctx) {
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#akn_itemBullet.
CustomAknListener.prototype.enterAkn_itemBullet = function(ctx) {
    var blockList = ctx.parentCtx.context_meta;
    // get blank blockList <item>
    var blockListItem = this.aknDocument.initBlockListItem();
    setBlockListItem(blockList, blockListItem);
    ctx.context_meta = blockListItem;    
};


// Enter a parse tree produced by AknParser#item_bullet_line.
CustomAknListener.prototype.enterItem_bullet_line = function(ctx) {
    ctx.context_meta = ctx.parentCtx.context_meta;
};


// Enter a parse tree produced by AknParser#bullet_sentence.
CustomAknListener.prototype.enterBullet_sentence = function(ctx) {

    var contextItem = ctx.parentCtx.context_meta;
    const sentenceText = ctx.getText().trim();
    // no number matched, set it as ordinary para
    if (contextItem.name === "akn__item") {
        contextItem.content.push(
            {name: "akn__p", content: [{"text": sentenceText}]}
        );
    }
    ctx.context_meta = ctx.parentCtx.context_meta;

};



const setBlockListIntroWrapup = (blockList, aknName, theText) => {

    var found = blockList.content.filter( item => item.name === aknName);
    var newContentItem;
    if (found.length > 0) {
        found[0].content.push({"text": theText});
        newContentItem = found[0];
    }
    blockList.content = blockList.content.map( (item, index, arr) => {
        if (item.name === aknName) {
            return newContentItem;
        } else {
            return item;
        }
    });

    return blockList;
}

const setBlockListItem = (blockList, itemContent) => {

    var found = blockList.content.filter( item => item.name === "items");
    var blockListItems;

    if (found.length > 0) {
        blockListItems = found[0];
    } 
    if (blockListItems !== undefined) {
        blockListItems.content.push(itemContent);
    }

    blockList.content = blockList.content.map( (item, index, arr) => {
        if (item.name === "items") {
            return blockListItems;
        } else {
            return item;
        }
    });

    return blockList;
}




exports.CustomAknListener = CustomAknListener;