// Redirecting requests.

const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>"); // write nos permite enviar respostas em linhas
    res.write("<head><title>My first page</title><head>");
    res.write(
      "<body><form action='/message'  method='POST'><input type='text'><button type='submit'>send</form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>"); // write nos permite enviar respostas em linhas
  res.write("<head><title>My first page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();  
});


server.listen(PORT, console.log(`Running on port ${PORT}`));