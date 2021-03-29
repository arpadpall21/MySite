const crypto = require('crypto');
const https = require('https');
const fs = require('fs');
const tls = require('tls');

var counter = 0;

let clientReq = https.get('https://stackoverflow.com', {ca:tls.rootCertificates[21]}, function(incMsg){
    let crt =  new crypto.X509Certificate(incMsg.socket.getPeerCertificate().raw);
    
    
    
    
    let parentCrt = new crypto.X509Certificate(fs.readFileSync('./download'));
    console.log( crt.checkIssued(parentCrt) );    
    // console.log( googleCert.verify(crt.publicKey) );
    
    console.log( crt.infoAccess );
    
    
});
    



