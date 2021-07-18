const http = require('http');

var srv = http.createServer(function(req, res){
    res.end('Hello World!');
})

srv.listen(50000, '127.0.0.1', function(err){
    if (err) console.log(err);
    console.log( 'node server is listening on port 1000');
});