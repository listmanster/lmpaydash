require('dotenv').config();

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const util = require("util");

const generateKeyPair = util.promisify(crypto.generateKeyPair);

let passphrase = process.env.PARSERBASE_JWT_PASSPHRASE_SECRET;


async function createKeyPair() {
    const keyPairs = await generateKeyPair("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: "spki",
          format: "pem"
        },
        privateKeyEncoding: {
          type: "pkcs8",
          format: "pem",
          cipher: "aes-256-cbc",
          passphrase
        }
      });
    return keyPairs;
}


async function createJWT(id, privateKey, expiresIn) {

    var algo = {algorithm: "RS256"};

    if (expiresIn) {
        algo.expiresIn = expiresIn;
    }

     
    const token = await jwt.sign(
        { 
          id: id + "" 
        },
        {
          key: privateKey,
          passphrase: passphrase
        },
        algo
    );

    return token;
}


async function verifyJWT(token, publicKey) {
    const decoded  = await jwt.verify(token, publicKey);
    return decoded;
}

/**
 * from: https://github.com/jppellerin/node-jsonwebtoken/blob/refresh-token/refresh.js
* Will refresh the given token.  The token is expected to be decoded and valid. No checks will be
* performed on the token.  The function will copy the values of the token, give it a new
* expiry time based on the given 'expiresIn' time and will return a new signed token.
*
* @param token
* @param expiresIn
* @param secretOrPrivateKey
* @param verifyOptions - Options to verify the token
* @param callback
* @return New signed JWT token
*/
async function refreshJWT(token, expiresIn, privateKey,  publicKey, verifyOptions) {
  //TODO: check if token is not good, if so return error ie: no payload, not required fields, etc.
  var header;
  var payload;
  var decoded = await jwt.decode(token, {complete: true});
  var verified = await jwt.verify(token, publicKey, verifyOptions);

    if (decoded.header) {
        header = decoded['header'];
        payload = decoded['payload'];
    }
    else {
        payload = token;
    }

    var optionMapping = {
        exp: 'expiresIn',
        aud: 'audience',
        nbf: 'notBefore',
        iss: 'issuer',
        sub: 'subject',
        jti: 'jwtid',
        alg: 'algorithm'
    };
    var newToken;
    var obj = {};
    var options = {};

    for (var key in payload) {
        if (Object.keys(optionMapping).indexOf(key) === -1) {
            obj[key] = payload[key];
        }
        else {
            options[optionMapping[key]] = payload[key];
        }
    }

    if(header) {
        options.header = { };
        for (var key in header) {
            if (key !== 'typ') {    //don't care about typ -> always JWT
                if (Object.keys(optionMapping).indexOf(key) === -1) {
                    options.header[key] = header[key];
                }
                else {
                    options[optionMapping[key]] = header[key];
                }
            }
        }
    }
    else {
        console.log('No algorithm was defined for token refresh - using default');
    }

    if (!token.iat) {
        options['noTimestamp'] = true;
    }

    options['expiresIn'] = expiresIn;
    newToken = await jwt.sign(obj, {key:privateKey, passphrase: passphrase}, options);
    return newToken;
};


/*
async function main() {
    const {privateKey, publicKey} = await generate();
    console.log(" public key = ", publicKey);
    console.log(" private key = ", privateKey);
    const token = await createJWT("user1", privateKey);
    console.log(" token = ", token);
    const decoded = await verifyJWT(token, publicKey);
    console.log(" decoded = ", decoded);
    const refToken = await refreshJWT(token, "2d", privateKey, publicKey);
    console.log(" refresh = ", refToken);
    const refdecoded = await verifyJWT(refToken, publicKey);
    console.log(" refdecoded = ", refdecoded);
}

main();
*/

module.exports = {
    createKeyPair: createKeyPair,
    createJWT: createJWT,
    verifyJWT: verifyJWT,
    refreshJWT: refreshJWT
}


