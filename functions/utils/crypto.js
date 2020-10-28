const crypto = require("crypto");
var base64url = require('base64url');
const util = require('util');

const randBytes = util.promisify(crypto.randomBytes);

async function generateToken() {
  var bytes = await randBytes(48);
  return base64url(bytes) + "="
}

module.exports = {
    generateToken: generateToken
}