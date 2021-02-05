
const http = require('http');


const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('index.html');
});


server.listen(port, () => console.log(`Listening on ${PORT}`));
