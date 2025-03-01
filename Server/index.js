import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(201, "OK", { "Content-type": "text/html" });
    res.write(`<h1> Hello from server</h1>`);
  } else {
    res.writeHead(404, "BAD", { "Content-type": "text/html" });
    res.write(`<h1>Not good</h1>`);
  }
});

server.listen(8000, () => console.log(`Server is running`));
