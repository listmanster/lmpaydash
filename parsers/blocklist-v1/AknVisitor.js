// Generated from Akn.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by AknParser.

function AknVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

AknVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
AknVisitor.prototype.constructor = AknVisitor;

// Visit a parse tree produced by AknParser#doc.
AknVisitor.prototype.visitDoc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_blockList.
AknVisitor.prototype.visitAkn_blockList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_listIntroduction.
AknVisitor.prototype.visitAkn_listIntroduction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_items.
AknVisitor.prototype.visitAkn_items = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_itemNum.
AknVisitor.prototype.visitAkn_itemNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_listWrapUp.
AknVisitor.prototype.visitAkn_listWrapUp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#item_numbered_line.
AknVisitor.prototype.visitItem_numbered_line = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_blockList_alpha.
AknVisitor.prototype.visitAkn_blockList_alpha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_items_alpha.
AknVisitor.prototype.visitAkn_items_alpha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_itemAlpha.
AknVisitor.prototype.visitAkn_itemAlpha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#item_alpha_line.
AknVisitor.prototype.visitItem_alpha_line = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_blockList_bullet.
AknVisitor.prototype.visitAkn_blockList_bullet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_items_bullet.
AknVisitor.prototype.visitAkn_items_bullet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#akn_itemBullet.
AknVisitor.prototype.visitAkn_itemBullet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#item_bullet_line.
AknVisitor.prototype.visitItem_bullet_line = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#numbered_sentence.
AknVisitor.prototype.visitNumbered_sentence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#alpha_sentence.
AknVisitor.prototype.visitAlpha_sentence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#bullet_sentence.
AknVisitor.prototype.visitBullet_sentence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by AknParser#sentence.
AknVisitor.prototype.visitSentence = function(ctx) {
  return this.visitChildren(ctx);
};



exports.AknVisitor = AknVisitor;