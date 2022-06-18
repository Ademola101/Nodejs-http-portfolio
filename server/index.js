const http = require("http");
const host = "localhost";
const port = 8000;


const app = http.createServer((req,res) => {
  res.writeHead(200);
  res.end("My server")
});

app.listen(port);

console.log(`app is listening on port ${port}`);