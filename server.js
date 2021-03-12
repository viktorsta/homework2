const http = require('http');

const app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world');
})

app.listen(3000, () => {
    console.log("Server is started!")
}); 
// app.listen(port, host, () => {
//     console.log(`Server is started! ${host}:${port}`);
// });

// require("dontenv").config();

// const port = process.env.PORT;
// const host = process.env.HOST;

