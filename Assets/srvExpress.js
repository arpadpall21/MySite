const express = require('/usr/lib/node_modules/express');           // globally installed express package (for some FUCK I cannot use bare specifier WTF)
const app = express();

app.use(
    (req, res, next) => { console.log('req URL = ' + req.originalUrl); next() },
    express.static('../')
)

app.listen(1000, ()=>console.log('Express is listening on localhost:1000'));