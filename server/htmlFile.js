const fs =require("fs").promises

const http = require("http");

const port = 8000;


const app = http.createServer((req,res) => {
  fs.readFile(__dirname + "/index.html").then((content => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(content)
  })).catch((err) => {
    res.writeHead(500)
    res.end(err);
    return;
  })
  });

app.listen(port);

console.log(`app is listening on port ${port}`);