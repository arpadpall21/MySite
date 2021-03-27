const crypto = require('crypto');
    const util = require('util');
    
    const ecdh = crypto.createECDH('c2pnb176v1');
    const ecdhPubKey = ecdh.generateKeys();
    
    const uncompressedKey = crypto.ECDH.convertKey(ecdhPubKey, 'c2pnb176v1', null, null, 'uncompressed');
    const compressedKey = crypto.ECDH.convertKey(ecdhPubKey, 'c2pnb176v1', null, null, 'compressed');
    const hybridKey = crypto.ECDH.convertKey(ecdhPubKey, 'c2pnb176v1', null, 'hex', 'hybrid');
    
    
    console.log( uncompressedKey );                                                    // -> '041ad485a2666bc9edd90e53a33fd966ca6be61fa02259d4a8afb0f9b8efe2bbb541f3ebea3614a28dcac7e767'    
    console.log( uncompressedKey.length );                                             // -> 90  
    
    console.log( compressedKey );                                                      // -> '021ad485a2666bc9edd90e53a33fd966ca6be61fa02259'
    console.log( compressedKey.length );                                               // -> 46
    
    console.log( hybridKey );                                                          // -> '041ad485a2666bc9edd90e53a33fd966ca6be61fa02259d4a8afb0f9b8efe2bbb541f3ebea3614a28dcac7e767'    
    console.log( hybridKey.length );                                                   // -> 90  
    