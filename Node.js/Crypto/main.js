    const crypto = require('crypto');
    const util = require('util');
    
    const ecdh = crypto.createECDH('c2pnb176v1');
    const ecdhPubKey = ecdh.generateKeys();
    
    const uncompressedKey = crypto.ECDH.convertKey(ecdhPubKey, 'c2pnb176v1', null, 'hex', 'uncompressed');
    const compressedKey = crypto.ECDH.convertKey(ecdhPubKey, 'c2pnb176v1', null, 'hex', 'compressed');
    const hybridKey = crypto.ECDH.convertKey(ecdhPubKey, 'c2pnb176v1', null, 'hex', 'hybrid');
    
    
    console.log( uncompressedKey );
    console.log( uncompressedKey.length );
    
    console.log( compressedKey );
    console.log( compressedKey.length );
    
    console.log( hybridKey );
    console.log( hybridKey.length );
// ------------------------------------------------------------------------------------
