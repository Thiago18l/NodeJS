
const handlerRequests = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><h1> Hello from my first Node Server </h1><form action="/create-user" method="POST"><input type="text" name="username" placeholder="your username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><ul><li>User 1</li></ul></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
      const body = [];
      req.on('data', (chunk) => {
          body.push(chunk);
      });
      req.on('end', ()=>{
          const parsedBody = Buffer.concat(body).toString();
          const username = parsedBody.split('=')[1];
          res.write('<html>');
          res.write(`<body><ul><li>${username}</li></ul>`);
          res.write('</html>');
          res.end();
      })
  }
};

module.exports = handlerRequests;
