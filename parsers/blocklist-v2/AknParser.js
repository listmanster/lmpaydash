// Generated from Akn.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var AknListener = require('./AknListener').AknListener;
var AknVisitor = require('./AknVisitor').AknVisitor;

var grammarFileName = "Akn.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\ny\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u0003,\n\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u00030\n\u0003\u0003\u0004\u0003\u0004\u0006",
    "\u00044\n\u0004\r\u0004\u000e\u00045\u0003\u0005\u0006\u00059\n\u0005",
    "\r\u0005\u000e\u0005:\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "@\n\u0006\u0003\u0007\u0003\u0007\u0006\u0007D\n\u0007\r\u0007\u000e",
    "\u0007E\u0003\b\u0003\b\u0006\bJ\n\b\r\b\u000e\bK\u0003\t\u0003\t\u0003",
    "\n\u0006\nQ\n\n\r\n\u000e\nR\u0003\u000b\u0003\u000b\u0005\u000bW\n",
    "\u000b\u0003\f\u0003\f\u0006\f[\n\f\r\f\u000e\f\\\u0003\r\u0003\r\u0003",
    "\u000e\u0006\u000eb\n\u000e\r\u000e\u000e\u000ec\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0006\u0010j\n\u0010\r\u0010\u000e\u0010k\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0006\u0014u\n\u0014\r\u0014\u000e\u0014v\u0003\u0014\u0002\u0002",
    "\u0015\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&\u0002\u0002\u0002s\u0002(\u0003\u0002\u0002\u0002",
    "\u0004+\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002\b8\u0003",
    "\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002",
    "\u000eG\u0003\u0002\u0002\u0002\u0010M\u0003\u0002\u0002\u0002\u0012",
    "P\u0003\u0002\u0002\u0002\u0014T\u0003\u0002\u0002\u0002\u0016X\u0003",
    "\u0002\u0002\u0002\u0018^\u0003\u0002\u0002\u0002\u001aa\u0003\u0002",
    "\u0002\u0002\u001ce\u0003\u0002\u0002\u0002\u001eg\u0003\u0002\u0002",
    "\u0002 m\u0003\u0002\u0002\u0002\"o\u0003\u0002\u0002\u0002$q\u0003",
    "\u0002\u0002\u0002&t\u0003\u0002\u0002\u0002()\u0005\u0004\u0003\u0002",
    ")\u0003\u0003\u0002\u0002\u0002*,\u0005\u0006\u0004\u0002+*\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0005",
    "\b\u0005\u0002.0\u0005\f\u0007\u0002/.\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020\u0005\u0003\u0002\u0002\u000213\u0005&\u0014\u0002",
    "24\u0007\b\u0002\u000232\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026\u0007\u0003",
    "\u0002\u0002\u000279\u0005\n\u0006\u000287\u0003\u0002\u0002\u00029",
    ":\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;\t\u0003\u0002\u0002\u0002<?\u0005\u000e\b\u0002=@\u0005\u0010",
    "\t\u0002>@\u0005\u0018\r\u0002?=\u0003\u0002\u0002\u0002?>\u0003\u0002",
    "\u0002\u0002?@\u0003\u0002\u0002\u0002@\u000b\u0003\u0002\u0002\u0002",
    "AC\u0005&\u0014\u0002BD\u0007\b\u0002\u0002CB\u0003\u0002\u0002\u0002",
    "DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002F\r\u0003\u0002\u0002\u0002GI\u0005 \u0011\u0002HJ\u0007\b\u0002",
    "\u0002IH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KI\u0003\u0002",
    "\u0002\u0002KL\u0003\u0002\u0002\u0002L\u000f\u0003\u0002\u0002\u0002",
    "MN\u0005\u0012\n\u0002N\u0011\u0003\u0002\u0002\u0002OQ\u0005\u0014",
    "\u000b\u0002PO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002S\u0013\u0003\u0002\u0002",
    "\u0002TV\u0005\u0016\f\u0002UW\u0005\u0018\r\u0002VU\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002W\u0015\u0003\u0002\u0002\u0002XZ\u0005",
    "\"\u0012\u0002Y[\u0007\b\u0002\u0002ZY\u0003\u0002\u0002\u0002[\\\u0003",
    "\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "]\u0017\u0003\u0002\u0002\u0002^_\u0005\u001a\u000e\u0002_\u0019\u0003",
    "\u0002\u0002\u0002`b\u0005\u001c\u000f\u0002a`\u0003\u0002\u0002\u0002",
    "bc\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002",
    "\u0002d\u001b\u0003\u0002\u0002\u0002ef\u0005\u001e\u0010\u0002f\u001d",
    "\u0003\u0002\u0002\u0002gi\u0005$\u0013\u0002hj\u0007\b\u0002\u0002",
    "ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002",
    "\u0002kl\u0003\u0002\u0002\u0002l\u001f\u0003\u0002\u0002\u0002mn\u0007",
    "\u0004\u0002\u0002n!\u0003\u0002\u0002\u0002op\u0007\u0005\u0002\u0002",
    "p#\u0003\u0002\u0002\u0002qr\u0007\u0003\u0002\u0002r%\u0003\u0002\u0002",
    "\u0002su\u0007\u0006\u0002\u0002ts\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\'",
    "\u0003\u0002\u0002\u0002\u000f+/5:?EKRV\\ckv"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "BULLET_SENTENCE", "NUMBERED_SENTENCE", "ALPHA_SENTENCE", 
                      "SENTENCE", "WORD", "NEWLINE", "WS", "ANY" ];

var ruleNames =  [ "doc", "akn_blockList", "akn_listIntroduction", "akn_items", 
                   "akn_itemNum", "akn_listWrapUp", "item_numbered_line", 
                   "akn_blockList_alpha", "akn_items_alpha", "akn_itemAlpha", 
                   "item_alpha_line", "akn_blockList_bullet", "akn_items_bullet", 
                   "akn_itemBullet", "item_bullet_line", "numbered_sentence", 
                   "alpha_sentence", "bullet_sentence", "sentence" ];

function AknParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

AknParser.prototype = Object.create(antlr4.Parser.prototype);
AknParser.prototype.constructor = AknParser;

Object.defineProperty(AknParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

AknParser.EOF = antlr4.Token.EOF;
AknParser.BULLET_SENTENCE = 1;
AknParser.NUMBERED_SENTENCE = 2;
AknParser.ALPHA_SENTENCE = 3;
AknParser.SENTENCE = 4;
AknParser.WORD = 5;
AknParser.NEWLINE = 6;
AknParser.WS = 7;
AknParser.ANY = 8;

AknParser.RULE_doc = 0;
AknParser.RULE_akn_blockList = 1;
AknParser.RULE_akn_listIntroduction = 2;
AknParser.RULE_akn_items = 3;
AknParser.RULE_akn_itemNum = 4;
AknParser.RULE_akn_listWrapUp = 5;
AknParser.RULE_item_numbered_line = 6;
AknParser.RULE_akn_blockList_alpha = 7;
AknParser.RULE_akn_items_alpha = 8;
AknParser.RULE_akn_itemAlpha = 9;
AknParser.RULE_item_alpha_line = 10;
AknParser.RULE_akn_blockList_bullet = 11;
AknParser.RULE_akn_items_bullet = 12;
AknParser.RULE_akn_itemBullet = 13;
AknParser.RULE_item_bullet_line = 14;
AknParser.RULE_numbered_sentence = 15;
AknParser.RULE_alpha_sentence = 16;
AknParser.RULE_bullet_sentence = 17;
AknParser.RULE_sentence = 18;


function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.akn_blockList = function() {
    return this.getTypedRuleContext(Akn_blockListContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.DocContext = DocContext;

AknParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, AknParser.RULE_doc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.akn_blockList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_blockListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_blockList;
    return this;
}

Akn_blockListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_blockListContext.prototype.constructor = Akn_blockListContext;

Akn_blockListContext.prototype.akn_items = function() {
    return this.getTypedRuleContext(Akn_itemsContext,0);
};

Akn_blockListContext.prototype.akn_listIntroduction = function() {
    return this.getTypedRuleContext(Akn_listIntroductionContext,0);
};

Akn_blockListContext.prototype.akn_listWrapUp = function() {
    return this.getTypedRuleContext(Akn_listWrapUpContext,0);
};

Akn_blockListContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_blockList(this);
	}
};

Akn_blockListContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_blockList(this);
	}
};

Akn_blockListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_blockList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_blockListContext = Akn_blockListContext;

AknParser.prototype.akn_blockList = function() {

    var localctx = new Akn_blockListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, AknParser.RULE_akn_blockList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AknParser.SENTENCE) {
            this.state = 40;
            this.akn_listIntroduction();
        }

        this.state = 43;
        this.akn_items();
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AknParser.SENTENCE) {
            this.state = 44;
            this.akn_listWrapUp();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_listIntroductionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_listIntroduction;
    return this;
}

Akn_listIntroductionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_listIntroductionContext.prototype.constructor = Akn_listIntroductionContext;

Akn_listIntroductionContext.prototype.sentence = function() {
    return this.getTypedRuleContext(SentenceContext,0);
};

Akn_listIntroductionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AknParser.NEWLINE);
    } else {
        return this.getToken(AknParser.NEWLINE, i);
    }
};


Akn_listIntroductionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_listIntroduction(this);
	}
};

Akn_listIntroductionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_listIntroduction(this);
	}
};

Akn_listIntroductionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_listIntroduction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_listIntroductionContext = Akn_listIntroductionContext;

AknParser.prototype.akn_listIntroduction = function() {

    var localctx = new Akn_listIntroductionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, AknParser.RULE_akn_listIntroduction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.sentence();
        this.state = 49; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 48;
            this.match(AknParser.NEWLINE);
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_itemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_items;
    return this;
}

Akn_itemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_itemsContext.prototype.constructor = Akn_itemsContext;

Akn_itemsContext.prototype.akn_itemNum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Akn_itemNumContext);
    } else {
        return this.getTypedRuleContext(Akn_itemNumContext,i);
    }
};

Akn_itemsContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_items(this);
	}
};

Akn_itemsContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_items(this);
	}
};

Akn_itemsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_items(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_itemsContext = Akn_itemsContext;

AknParser.prototype.akn_items = function() {

    var localctx = new Akn_itemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, AknParser.RULE_akn_items);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 53;
            this.akn_itemNum();
            this.state = 56; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.NUMBERED_SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_itemNumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_itemNum;
    return this;
}

Akn_itemNumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_itemNumContext.prototype.constructor = Akn_itemNumContext;

Akn_itemNumContext.prototype.item_numbered_line = function() {
    return this.getTypedRuleContext(Item_numbered_lineContext,0);
};

Akn_itemNumContext.prototype.akn_blockList_alpha = function() {
    return this.getTypedRuleContext(Akn_blockList_alphaContext,0);
};

Akn_itemNumContext.prototype.akn_blockList_bullet = function() {
    return this.getTypedRuleContext(Akn_blockList_bulletContext,0);
};

Akn_itemNumContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_itemNum(this);
	}
};

Akn_itemNumContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_itemNum(this);
	}
};

Akn_itemNumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_itemNum(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_itemNumContext = Akn_itemNumContext;

AknParser.prototype.akn_itemNum = function() {

    var localctx = new Akn_itemNumContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, AknParser.RULE_akn_itemNum);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.item_numbered_line();
        this.state = 61;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case AknParser.ALPHA_SENTENCE:
        	this.state = 59;
        	this.akn_blockList_alpha();
        	break;
        case AknParser.BULLET_SENTENCE:
        	this.state = 60;
        	this.akn_blockList_bullet();
        	break;
        case AknParser.EOF:
        case AknParser.NUMBERED_SENTENCE:
        case AknParser.SENTENCE:
        	break;
        default:
        	break;
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_listWrapUpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_listWrapUp;
    return this;
}

Akn_listWrapUpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_listWrapUpContext.prototype.constructor = Akn_listWrapUpContext;

Akn_listWrapUpContext.prototype.sentence = function() {
    return this.getTypedRuleContext(SentenceContext,0);
};

Akn_listWrapUpContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AknParser.NEWLINE);
    } else {
        return this.getToken(AknParser.NEWLINE, i);
    }
};


Akn_listWrapUpContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_listWrapUp(this);
	}
};

Akn_listWrapUpContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_listWrapUp(this);
	}
};

Akn_listWrapUpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_listWrapUp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_listWrapUpContext = Akn_listWrapUpContext;

AknParser.prototype.akn_listWrapUp = function() {

    var localctx = new Akn_listWrapUpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, AknParser.RULE_akn_listWrapUp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.sentence();
        this.state = 65; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 64;
            this.match(AknParser.NEWLINE);
            this.state = 67; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Item_numbered_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_item_numbered_line;
    return this;
}

Item_numbered_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Item_numbered_lineContext.prototype.constructor = Item_numbered_lineContext;

Item_numbered_lineContext.prototype.numbered_sentence = function() {
    return this.getTypedRuleContext(Numbered_sentenceContext,0);
};

Item_numbered_lineContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AknParser.NEWLINE);
    } else {
        return this.getToken(AknParser.NEWLINE, i);
    }
};


Item_numbered_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterItem_numbered_line(this);
	}
};

Item_numbered_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitItem_numbered_line(this);
	}
};

Item_numbered_lineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitItem_numbered_line(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Item_numbered_lineContext = Item_numbered_lineContext;

AknParser.prototype.item_numbered_line = function() {

    var localctx = new Item_numbered_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, AknParser.RULE_item_numbered_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.numbered_sentence();
        this.state = 71; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 70;
            this.match(AknParser.NEWLINE);
            this.state = 73; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_blockList_alphaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_blockList_alpha;
    return this;
}

Akn_blockList_alphaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_blockList_alphaContext.prototype.constructor = Akn_blockList_alphaContext;

Akn_blockList_alphaContext.prototype.akn_items_alpha = function() {
    return this.getTypedRuleContext(Akn_items_alphaContext,0);
};

Akn_blockList_alphaContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_blockList_alpha(this);
	}
};

Akn_blockList_alphaContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_blockList_alpha(this);
	}
};

Akn_blockList_alphaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_blockList_alpha(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_blockList_alphaContext = Akn_blockList_alphaContext;

AknParser.prototype.akn_blockList_alpha = function() {

    var localctx = new Akn_blockList_alphaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, AknParser.RULE_akn_blockList_alpha);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.akn_items_alpha();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_items_alphaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_items_alpha;
    return this;
}

Akn_items_alphaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_items_alphaContext.prototype.constructor = Akn_items_alphaContext;

Akn_items_alphaContext.prototype.akn_itemAlpha = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Akn_itemAlphaContext);
    } else {
        return this.getTypedRuleContext(Akn_itemAlphaContext,i);
    }
};

Akn_items_alphaContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_items_alpha(this);
	}
};

Akn_items_alphaContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_items_alpha(this);
	}
};

Akn_items_alphaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_items_alpha(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_items_alphaContext = Akn_items_alphaContext;

AknParser.prototype.akn_items_alpha = function() {

    var localctx = new Akn_items_alphaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, AknParser.RULE_akn_items_alpha);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 77;
            this.akn_itemAlpha();
            this.state = 80; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.ALPHA_SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_itemAlphaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_itemAlpha;
    return this;
}

Akn_itemAlphaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_itemAlphaContext.prototype.constructor = Akn_itemAlphaContext;

Akn_itemAlphaContext.prototype.item_alpha_line = function() {
    return this.getTypedRuleContext(Item_alpha_lineContext,0);
};

Akn_itemAlphaContext.prototype.akn_blockList_bullet = function() {
    return this.getTypedRuleContext(Akn_blockList_bulletContext,0);
};

Akn_itemAlphaContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_itemAlpha(this);
	}
};

Akn_itemAlphaContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_itemAlpha(this);
	}
};

Akn_itemAlphaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_itemAlpha(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_itemAlphaContext = Akn_itemAlphaContext;

AknParser.prototype.akn_itemAlpha = function() {

    var localctx = new Akn_itemAlphaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, AknParser.RULE_akn_itemAlpha);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.item_alpha_line();
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AknParser.BULLET_SENTENCE) {
            this.state = 83;
            this.akn_blockList_bullet();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Item_alpha_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_item_alpha_line;
    return this;
}

Item_alpha_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Item_alpha_lineContext.prototype.constructor = Item_alpha_lineContext;

Item_alpha_lineContext.prototype.alpha_sentence = function() {
    return this.getTypedRuleContext(Alpha_sentenceContext,0);
};

Item_alpha_lineContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AknParser.NEWLINE);
    } else {
        return this.getToken(AknParser.NEWLINE, i);
    }
};


Item_alpha_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterItem_alpha_line(this);
	}
};

Item_alpha_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitItem_alpha_line(this);
	}
};

Item_alpha_lineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitItem_alpha_line(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Item_alpha_lineContext = Item_alpha_lineContext;

AknParser.prototype.item_alpha_line = function() {

    var localctx = new Item_alpha_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, AknParser.RULE_item_alpha_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.alpha_sentence();
        this.state = 88; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 87;
            this.match(AknParser.NEWLINE);
            this.state = 90; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_blockList_bulletContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_blockList_bullet;
    return this;
}

Akn_blockList_bulletContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_blockList_bulletContext.prototype.constructor = Akn_blockList_bulletContext;

Akn_blockList_bulletContext.prototype.akn_items_bullet = function() {
    return this.getTypedRuleContext(Akn_items_bulletContext,0);
};

Akn_blockList_bulletContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_blockList_bullet(this);
	}
};

Akn_blockList_bulletContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_blockList_bullet(this);
	}
};

Akn_blockList_bulletContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_blockList_bullet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_blockList_bulletContext = Akn_blockList_bulletContext;

AknParser.prototype.akn_blockList_bullet = function() {

    var localctx = new Akn_blockList_bulletContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, AknParser.RULE_akn_blockList_bullet);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.akn_items_bullet();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_items_bulletContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_items_bullet;
    return this;
}

Akn_items_bulletContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_items_bulletContext.prototype.constructor = Akn_items_bulletContext;

Akn_items_bulletContext.prototype.akn_itemBullet = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Akn_itemBulletContext);
    } else {
        return this.getTypedRuleContext(Akn_itemBulletContext,i);
    }
};

Akn_items_bulletContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_items_bullet(this);
	}
};

Akn_items_bulletContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_items_bullet(this);
	}
};

Akn_items_bulletContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_items_bullet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_items_bulletContext = Akn_items_bulletContext;

AknParser.prototype.akn_items_bullet = function() {

    var localctx = new Akn_items_bulletContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, AknParser.RULE_akn_items_bullet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 94;
            this.akn_itemBullet();
            this.state = 97; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.BULLET_SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Akn_itemBulletContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_akn_itemBullet;
    return this;
}

Akn_itemBulletContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Akn_itemBulletContext.prototype.constructor = Akn_itemBulletContext;

Akn_itemBulletContext.prototype.item_bullet_line = function() {
    return this.getTypedRuleContext(Item_bullet_lineContext,0);
};

Akn_itemBulletContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAkn_itemBullet(this);
	}
};

Akn_itemBulletContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAkn_itemBullet(this);
	}
};

Akn_itemBulletContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAkn_itemBullet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Akn_itemBulletContext = Akn_itemBulletContext;

AknParser.prototype.akn_itemBullet = function() {

    var localctx = new Akn_itemBulletContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, AknParser.RULE_akn_itemBullet);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.item_bullet_line();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Item_bullet_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_item_bullet_line;
    return this;
}

Item_bullet_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Item_bullet_lineContext.prototype.constructor = Item_bullet_lineContext;

Item_bullet_lineContext.prototype.bullet_sentence = function() {
    return this.getTypedRuleContext(Bullet_sentenceContext,0);
};

Item_bullet_lineContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AknParser.NEWLINE);
    } else {
        return this.getToken(AknParser.NEWLINE, i);
    }
};


Item_bullet_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterItem_bullet_line(this);
	}
};

Item_bullet_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitItem_bullet_line(this);
	}
};

Item_bullet_lineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitItem_bullet_line(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Item_bullet_lineContext = Item_bullet_lineContext;

AknParser.prototype.item_bullet_line = function() {

    var localctx = new Item_bullet_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, AknParser.RULE_item_bullet_line);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.bullet_sentence();
        this.state = 103; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 102;
            this.match(AknParser.NEWLINE);
            this.state = 105; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Numbered_sentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_numbered_sentence;
    return this;
}

Numbered_sentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Numbered_sentenceContext.prototype.constructor = Numbered_sentenceContext;

Numbered_sentenceContext.prototype.NUMBERED_SENTENCE = function() {
    return this.getToken(AknParser.NUMBERED_SENTENCE, 0);
};

Numbered_sentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterNumbered_sentence(this);
	}
};

Numbered_sentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitNumbered_sentence(this);
	}
};

Numbered_sentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitNumbered_sentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Numbered_sentenceContext = Numbered_sentenceContext;

AknParser.prototype.numbered_sentence = function() {

    var localctx = new Numbered_sentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, AknParser.RULE_numbered_sentence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(AknParser.NUMBERED_SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Alpha_sentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_alpha_sentence;
    return this;
}

Alpha_sentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Alpha_sentenceContext.prototype.constructor = Alpha_sentenceContext;

Alpha_sentenceContext.prototype.ALPHA_SENTENCE = function() {
    return this.getToken(AknParser.ALPHA_SENTENCE, 0);
};

Alpha_sentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterAlpha_sentence(this);
	}
};

Alpha_sentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitAlpha_sentence(this);
	}
};

Alpha_sentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitAlpha_sentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Alpha_sentenceContext = Alpha_sentenceContext;

AknParser.prototype.alpha_sentence = function() {

    var localctx = new Alpha_sentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, AknParser.RULE_alpha_sentence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(AknParser.ALPHA_SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Bullet_sentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_bullet_sentence;
    return this;
}

Bullet_sentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bullet_sentenceContext.prototype.constructor = Bullet_sentenceContext;

Bullet_sentenceContext.prototype.BULLET_SENTENCE = function() {
    return this.getToken(AknParser.BULLET_SENTENCE, 0);
};

Bullet_sentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterBullet_sentence(this);
	}
};

Bullet_sentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitBullet_sentence(this);
	}
};

Bullet_sentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitBullet_sentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.Bullet_sentenceContext = Bullet_sentenceContext;

AknParser.prototype.bullet_sentence = function() {

    var localctx = new Bullet_sentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, AknParser.RULE_bullet_sentence);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(AknParser.BULLET_SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AknParser.RULE_sentence;
    return this;
}

SentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentenceContext.prototype.constructor = SentenceContext;

SentenceContext.prototype.SENTENCE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AknParser.SENTENCE);
    } else {
        return this.getToken(AknParser.SENTENCE, i);
    }
};


SentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.enterSentence(this);
	}
};

SentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof AknListener ) {
        listener.exitSentence(this);
	}
};

SentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof AknVisitor ) {
        return visitor.visitSentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




AknParser.SentenceContext = SentenceContext;

AknParser.prototype.sentence = function() {

    var localctx = new SentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, AknParser.RULE_sentence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 113;
            this.match(AknParser.SENTENCE);
            this.state = 116; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===AknParser.SENTENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.AknParser = AknParser;
