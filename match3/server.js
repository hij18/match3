const http = require('http');
const fs = require('fs');
const port = 8000;


const requestHandler = (req, res) => {
    const filePath = req.url.substr(1);
    fs.access(filePath, fs.constants.R_OK, err => {
        if (err) {
            res.statusCode = 404;
            res.end('All dead');
        } else {
            fs.createReadStream(filePath).pipe(res);
        }
    });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('shit happends bro', err);
    }
});

console.log(`server is listening on ${port}`);