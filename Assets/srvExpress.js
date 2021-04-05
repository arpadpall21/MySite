const express = require('express');     
const cookieParser = require('cookie-parser');
const app = express();

// console.log( express );
app.use(
    cookieParser(),
    function(req, res, next){ 
        console.log( req.cookies );
        
        res.cookie('srvCookie', 21, {httpOnly:true});
        
        next();
    },
    express.static('../')
)

app.listen(1000, ()=>console.log('Express is listening on localhost:1000'));

