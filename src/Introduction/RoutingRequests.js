const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>"); // write nos permite enviar respostas em linhas
    res.write("<head><title>My first page</title><head>");
    res.write("<body><form action='/message'  method='POST'><input type='text'><button type='submit'>send</form></body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen();
